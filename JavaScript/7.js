/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
  that the 6th prime is 13.

  What is the 10001st prime number?
*/
/*
  Answer:
  104743
*/


/*
  Use the primes module. This only works with nodejs.
*/
var primes = require('./primes.js');
console.log(primes.findNthPrime(10001));
