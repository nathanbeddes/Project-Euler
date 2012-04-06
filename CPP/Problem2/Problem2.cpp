#include <iostream>
#include <sys/time.h>
#include "MyTimer.h"



using namespace std;



void Problem2 (void);



int main (int argc, char *argv[])
{
   timeFunc(Problem2);

   return(0);
}



/**
 *  Each new term in the Fibonacci sequence is generated by adding the previous
 *  two terms. By starting with 1 and 2, the first 10 terms will be:
 * 
 *  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 
 *  Find the sum of all the even-valued terms in the sequence which do not
 *  exceed four million.
 */
void Problem2 (void)
{
   int sum = 0;
   int fib1 = 1;
   int fib2 = 2;
   int tmp;

   for (int i = 0; i < 10; ++i) {
      cout << fib1 << endl;
      tmp = fib1 + fib2;
      fib1 = fib2;
      fib2 = tmp;

   }
   
   cout << sum << endl;
}
