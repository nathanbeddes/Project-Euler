#! /usr/local/bin/python3.1

# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
# a^2 + b^2 = c^2
#
# For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
#
# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.
#
# Answer:
# 31875000

def Problem9 ():
    """
    Attempting to find the Pythagorean triplet with Euclid's formula, using one
    additional parameter, k, in case the triple isn't primitive (that is: in
    case a, b, and c are not coprime).

    a = k*(2*m*n), b = k*(m^2 - n^2), c = k*(m^2 + n^2)
    where k, m, and n are natural numbers and m > n

    a + b + c = 1000
    k*(2*m*n) + k*(m^2 - n^2) + k*(m^2 + n^2) = 1000
    k*(2*m*n + m^2 - n^2 + m^2 + n^2) = 1000
    k*(2*m*n + 2*m^2) = 1000
    k*m*(m + n) = 500

    Now, if m > n, then m must be at least 2. Therefore, k*6 = 500 so k =< 83
    k can be as low as 1, as can n. Therefore m^2 + m = 500, so m =< 22

    1 =< k < 84
    2 =< m < 23
    1 =< n < m
    """
    k = 1
    m = 2
    n = 1

    while k < 84:
        m = 2
        while m < 23:
            n = 1
            while n < m:
                if (k*m*(m + n) == 500):
                    a = k*(2*m*n)
                    b = k*(m**2 - n**2)
                    c = k*(m**2 + n**2)
                    print("k:", k, "m:", m, "n:", n)
                    print("a =", a)
                    print("b =", b)
                    print("c = ", c)
                    print("abc =", (a*b*c))
                    return (a*b*c)
                else:
                    n += 1
            m += 1
        k += 1

Problem9()
