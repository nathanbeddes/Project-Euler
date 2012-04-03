/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
the 6th prime is 13.

What is the 10001st prime number?
*/
/*
Answer:
104743
*/


// Use the atkin module. For nodejs only.
var sieve = require('./atkin.js');


var firstPrimes = sieve.sieveOfAtkin(1000);
console.log(firstPrimes);
console.log(firstPrimes.length);
