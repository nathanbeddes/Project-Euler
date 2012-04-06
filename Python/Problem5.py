#! /usr/local/bin/python3.1

# 2520 is the smallest number that can be divided by each of the numbers from 1
# to 10 without any remainder.
#
# What is the smallest number that is evenly divisible by all of the numbers
# from 1 to 20?
#
# Answer:
# 232792560

def Problem5 (topNumber):
    primes = [2, 3, 5, 7, 11, 13, 17, 19]
    primes = sorted(primes)
    highestPrimeFactors = {}

    for i in primes:
        highestPrimeFactors[i] = 0

    for number in range(2, topNumber+1):
        primeFactors = {}
        for j in primes:
            while ((number % j) == 0):
                if (j in primeFactors):
                    primeFactors[j] = primeFactors[j] + 1
                else:
                    primeFactors[j] = 1
                number /= j
            if j in primeFactors:
                if (primeFactors[j] > highestPrimeFactors[j]):
                    highestPrimeFactors[j] = primeFactors[j]

    print(highestPrimeFactors)
    product = 1
    for j in primes:
        product *= (j**highestPrimeFactors[j])
    print("product:",product)

Problem5(20)

