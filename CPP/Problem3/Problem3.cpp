#include <gmpxx.h>
#include <iostream>
#include <sys/time.h>
#include <cmath>
#include "../MyTimer.h"



using namespace std;



void Problem3 ();



int main (int argc, char *argv[])
{
   timeFunc(Problem3);

   return(0);
}



/**
 * The prime factors of 13195 are 5, 7, 13 and 29. 
 *  
 * What is the largest prime factor of the number 600851475143 ? 
 */
bool isPrime (mpz_class& primeCandidate);
void Problem3 ()
{
   mpz_class bigNum;
   bigNum = "600851475143";

   mpz_class biggestPrime = sqrt(bigNum);
   cout << "Prime factors of " << bigNum << ":" << endl;
   if ((biggestPrime%2) == 0) {
      --biggestPrime;
   }
   while (biggestPrime > 1) {
      if (isPrime(biggestPrime) && ((bigNum%biggestPrime) == 0)) {
         cout << biggestPrime << endl;
         return;
      }
      biggestPrime -= 2;
   }
}
bool isPrime (mpz_class& primeCandidate)
{
   if ((primeCandidate%2) == 0) {
      return false;
   }
   mpz_class squareRoot;
   squareRoot = sqrt(primeCandidate);
   for (int i = 3; i <=  squareRoot; i+=2) {
      if ((primeCandidate%i) == 0) {
         return false;
      }
   }

   return true;
}
