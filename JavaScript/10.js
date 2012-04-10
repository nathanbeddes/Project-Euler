/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
*/
/*
 Answer:
 142913828922
*/


var sumPrimesBelowUpper = function (upper)
{
   /*
    * Prime numbers over 30 are of the form 30*k + i, where i are integers that
    * are coprime with 30. However, note that not all integers of the form 30*k
    * + i are prime.
    * 
    * 30 was chosen because it is the 3rd primorial, or the product of the first
    * n primes, in this case 2*3*5. In general, primes are of the form
    * primorial_n*k + i, where i are coprime with primorial_n.
    *
    * The sum of the prime numbers under 30:
    * 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 = 129
    */
   var primesUnder30 = [2,3,5,7,11,13,17,19,23,29];
   var sum = 0;

   for (var i = 0; i < primesUnder30.length; ++i) {
      sum += primesUnder30[i];
   }

   return sum;
};


console.log(sumPrimesBelowUpper(2000000));