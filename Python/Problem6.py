#! /usr/local/bin/python3.1

# The sum of the squares of the first ten natural numbers is,
# 
#   1^2 + 2^2 + ... + 10^2 = 385
# 
# The square of the sum of the first ten natural numbers is,
# 
#  (1 + 2 + ... + 10)^2 = 3025
# 
# Hence the difference between the sum of the squares of the first ten natural
# numbers and the square of the sum is 3025 - 385 = 2640.
# 
# Find the difference between the sum of the squares of the first one hundred
# natural numbers and the square of the sum.
#
# Answer:
# 25164150
def Problem6 ():
    squareOfSum = 0
    sumOfSquares = 0
    sum = 0
    for i in range(1, 101):
        sum += i
        sumOfSquares += i**2
    squareOfSum = sum**2
    print(squareOfSum - sumOfSquares)

Problem6()
