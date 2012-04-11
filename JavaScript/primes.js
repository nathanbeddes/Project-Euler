/* 
   Node module for various prime finding utilities.

   The 'exports' prefix on lines declaring functions make that function
   available in the primes nodejs module. 

   Note that there is 'var' declarations outside of functions would make those
   variables private to this module.
*/


/*
  sieveOfAtkin() finds all primes up to, and including, a number.

  http://en.wikipedia.org/wiki/Sieve_of_Atkin
*/
exports.sieveOfAtkin = function (limit)
{
   /*
     Initialize the sieve.
   */
   var isPrime = [false, false, true, true, false];
   for (var i = 5; i <= limit; ++i) {
      isPrime.push(false);
   }
   var sqrtLimit = Math.floor(Math.sqrt(limit));

   /*
     Put in candidate primes:
     Integers which have an odd number of representations by certain quadratic
     forms.
   */
   var n;
   var x;
   var y;
   for (x = 1; x <= sqrtLimit; ++x) {
      for (y = 1; y <= sqrtLimit; ++y) {
	 n = (4*x*x + y*y);
	 if ((n <= limit) && (((n % 12) === 1) || ((n % 12) === 5))) {
	    isPrime[n] = !isPrime[n];
	 }
	 n = (3*x*x + y*y);
	 if ((n <= limit) && ((n % 12) === 7)) {
	    isPrime[n] = !isPrime[n];
	 }
	 n = (3*x*x - y*y);
	 if ((x > y) && (n <= limit) && ((n % 12) === 11)) {
	    isPrime[n] = !isPrime[n];
	 }
      }
   }

   /*
     Eliminate composites by 'sieving'.
   */
   var k;
   for (n = 5; n <= sqrtLimit; ++n) {
      if (isPrime[n]) {
	 for (k = n*n; k <= limit; k *= n) {
	    isPrime[k] = false;
	 }
      }
   }

   /*
     We only have a sieve filled with booleans right now; generate the actual
     list of prime numbers.
   */
   var primes = [];
   for (var i = 2; i < isPrime.length; ++i) {
      if (isPrime[i]) {
	 primes.push(i);
      }
   }

   return primes;
};


exports.isPrime = function (candidate)
{
   if ((candidate % 2) === 0) {
      if (candidate === 2) {
	 return true;
      } else {
	 return false;
      }
   }

   var squareRoot = Math.sqrt(candidate);
   var i = 3;
   while (i <= squareRoot) {
      if ((candidate % i) === 0) {
	 return false;
      }
      i += 2;
   }

   return true;
};


exports.isPrimeSophisticated = function(candidate, beginningPrimes)
{
   if (typeof beginningPrimes === 'undefined') {
      return this.isPrime(candidate);
   }

   var squareRoot = Math.sqrt(candidate);
   var i = 0;

   for (var counter = 0; counter < beginningPrimes.length; ++counter) {
      i = beginningPrimes[counter];
      if ((i <= squareRoot) &&
	  (i < candidate) &&
	  ((candidate % i) === 0)) {
	 return false;
      }
   }

   if (i === 2) {
      i = 3;
   } else {
      i += 2;
   }

   while (i <= squareRoot) {
      if ((candidate % i) === 0) {
	 return false;
      }
      i += 2;
   }

   return true;
};


exports.findNthPrime = function (n, primeFinder)
{
   if (n <= 1) {
      return 2;
   }

   /*
     If there is no primeFinder function passed in, set it to a default.
   */
   if (typeof primeFinder === 'undefined') {
      primeFinder = this.isPrime;
   }

   var candidate = 3;
   var i = 1;
   while (i < n) {
      if (primeFinder(candidate)) {
         ++i;
      }
      candidate += 2;
   }

   return (candidate - 2);
};
