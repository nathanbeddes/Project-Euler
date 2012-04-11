/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
*/
/*
 Answer:
 142913828922
*/

var primes = require("./primes.js");

var sumPrimes30ToUpper = function (upper)
{
   /*
    * We'll manually sum the primes under 30 from a table, then use the table to
    * find the primes larger than 30.
    */
   var primesUnder30 = [2,3,5,7,11,13,17,19,23,29];

   var sum = 0;
   for (var i = 0; i < primesUnder30.length; ++i) {
      sum += primesUnder30[i];
   }

   /*
    * Prime numbers over 30 are of the form 30*k + i, where i are integers that
    * are coprime with 30. However, note that not all integers of the form 30*k
    * + i are prime.
    * 
    * 30 was chosen because it is the 3rd primorial, or the product of the first
    * n primes, in this case 2*3*5. In general, primes are of the form
    * primorial_n*k + i, where i are coprime with primorial_n.
    */
   var coPrimesFor30 = [1,7,11,13,17,19,23,29];
   var coPrimesFor30Count = coPrimesFor30.length;

   var candidate = 31; 
   for (var k = 1; candidate < upper; ++k) {
      for (var i = 0; i < coPrimesFor30Count; ++i) {
	 candidate = (30*k + coPrimesFor30[i]);
	 if (candidate > upper) {
	    return sum;
	 }
	 if (primes.isPrimeSophisticated(candidate, primesUnder30)) {
//	 if (primes.isPrimeSophisticated(candidate)) {
	    sum += candidate;
	 }
      }
   }

   return sum;
};


console.log(sumPrimes30ToUpper(2000000));
