/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 */
/* 
 * Answer:
 * 6857
 */


var sieveOfAtkin = function (limit)
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

    var primes = [];
    for (var i = 2; i < isPrime.length; ++i) {
	if (isPrime[i]) {
	    primes.push(i);
	}
    }
	    
    return primes;
};


var trialDivision = function (candidate)
{
    if (candidate === 1) {
	return 1;
    }

    var primes = sieveOfAtkin(Math.sqrt(candidate) + 1);
    var primeFactors = [];

    for (var i = 1; i < primes.length; ++i) {
	var p = primes[i];
	if (p*p > candidate) {
	    break;
	}
	while ((candidate % p) === 0) {
	    primeFactors.push(p);
	    candidate /= p;
	}
    }
    if (candidate > 1) {
	primeFactors.push(candidate);
    }

    return primeFactors;
};

var target = 600851475143;
var primeFactors = trialDivision(target);
console.log(primeFactors[primeFactors.length-1]);

