#! /usr/local/bin/python3.1

# 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
#
# What is the sum of the digits of the number 2^1000?
#
# Answer:
# 1366

def Problem16 (N):
    strTwoRaisedToN = str(2**N)
    
    i = 0
    sum = 0
    while (i < len(strTwoRaisedToN)):
        sum += int(strTwoRaisedToN[i])
        i += 1
    
    print(sum)

Problem16(1000)

