#! /usr/local/bin/python3.1

def isPalindrome (candidate):
    """
    Determines if the number candidate is a "palindrome" or not.
    e.g. 808
    """
    strCandidate = str(candidate)

    left = 0
    right = len(strCandidate) - 1

    while (left < right):
        if (strCandidate[left] != strCandidate[right]):
            return False
        left += 1
        right -= 1
    return True


# A palindromic number reads the same both ways. The largest palindrome made
# from the product of two 2-digit numbers is 9009 = 91 * 99.
#
# Find the largest palindrome made from the product of two 3-digit numbers.
#
# Answer:
# 993*913 = 906609
def Problem4 ():
    products = 0
    left = 999
    largestRight = 100
    largestCandidate = 0

    while left > 0:
        right = left
        while right > largestRight:
            candidate = left*right
            products += 1
            if isPalindrome(candidate):
                if (candidate < largestCandidate):
                    print(largestCandidate, "is a palindrome resulting from", left, "*", right)
                    print(products, "products checked")
                    return
                else:
                    largestCandidate = candidate
                largestRight = right
            else:
                right -= 1
        left -= 1

    #print(products, "products checked")

Problem4()
