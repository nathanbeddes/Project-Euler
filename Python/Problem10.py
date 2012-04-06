#! /usr/local/bin/python3.1

from math import sqrt

# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#
# Find the sum of all the primes below two million.
#
# Answer:
# 142913828922

def isPrimeNaive (candidate):
    """
    Determines if candidate is prime or not. Naive, only use to bootstrap things
    """
    if ((candidate % 2) == 0):
        if (candidate == 2):
            return True
        else:
            return False

    squareRoot = sqrt(candidate)
    i = 3
    while (i <= squareRoot):
        if ((candidate % i) == 0):
            return False
        i += 2

    return True

def generateFirstNPrimes6 (N):
    firstNPrimes = []

    i = 0
    if (N > 0):
        firstNPrimes.append(2)
        i += 1
        if (N > 1):
            firstNPrimes.append(3)
            i += 1

    k = 1
    while i < N:
        base = 6*k
        baseM1 = base - 1
        baseP1 = base + 1
        if (isPrimeNaive(baseM1)):
            firstNPrimes.append(baseM1)
            i += 1
        if ((i < N) and isPrimeNaive(baseP1)):
            firstNPrimes.append(baseP1)
            i += 1
        k += 1

    return firstNPrimes
    
def isPrimeSophisticated (firstNPrimes, candidate):
    squareRoot = sqrt(candidate)
    i = 0
    for counter in range(0, len(firstNPrimes)):
        i = firstNPrimes[counter]
        if ((i <= squareRoot) and (i < candidate) and ((candidate % i) == 0)):
            return False

    if i == 2:
        i = 3
    else:
        i += 2
    while (i <= squareRoot):
        if ((candidate % i) == 0):
            return False
        i += 2

    return True

def sumPrimesBelowUpper (Upper, N):
    firstNPrimes = generateFirstNPrimes6(N)

    #Use the precalculated primes
    sum = 0
    if (Upper <= firstNPrimes[-1]):
        counter = 0
        while (firstNPrimes[counter] < Upper):
            sum += firstNPrimes[counter]
            counter += 1
        return sum
    else:
        for prime in firstNPrimes:
            sum += prime

    # Prime numbers over 30 are of the form 30*k + i, where i are integers that
    # are coprime with 30. However, note that not all integers of the form
    # 30*k + i are prime.
    # 
    # 30 was chosen because it is the 3rd primorial, or the product of the first
    # n primes, in this case 2*3*5. In general, primes are of the form
    # primorial_n*k + i, where i are coprime with primorial_n.
    coprimes30 = [1, 7, 11, 13, 17, 19, 23, 29]
    
    # Find the right k and "coprime" to continue from.
    candidate = firstNPrimes[-1]
    if (candidate == 2): # The only even prime, which we can't add 2 to, to find the next candidate
        candidate = 3
    while (candidate < 31):
        if (candidate >= Upper):
            return sum
        if isPrimeSophisticated(firstNPrimes, candidate):
            sum += candidate
        candidate += 2
    k = int(candidate/30)
    coprime = candidate%(k*30)
    i = 0
    while (coprimes30[i] < coprime):
        i += 1
    i += 1
    if (i == len(coprimes30)):
        i = 0
        k += 1
    
    while (candidate < Upper):
        while (i < len(coprimes30)):
            candidate = (k*30 + coprimes30[i])
            i += 1
            if (candidate > Upper):
                return sum
            if isPrimeSophisticated(firstNPrimes, candidate):
                sum += candidate
        k += 1
        i = 0

    return sum

def Problem10 (Upper, N):
    sum = sumPrimesBelowUpper(Upper, N)
    print("Problem 10 :", sum)

Upper = 2000000
N = 200
Problem10(Upper, N)

