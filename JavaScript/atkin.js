/*
 Node module for sieveOfAtkin which finds all primes up to, and including, a
 number.
 */

/*
 http://en.wikipedia.org/wiki/Sieve_of_Atkin

 The 'exports' part of the first line makes sieveOfAtkin() available in the
 atkin nodejs module. Note that there is no 'var' declaration, which would make
 sieveOfAtkin private to atkin.js.
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