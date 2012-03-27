/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 */
/* 
 * Answer:
 * 6857
 */


var isPrime = function (candidate)
{
   if (candidate === 1) {
      return false;
   }
   if (candidate === 2) {
      return true;
   }

   if ((candidate % 2) === 0) {
      return false;
   }

   var upper = floor(sqrt(candidate));
   var divisor = 3;
   while (divisor <= upper) {
      if ((candidate % divisor) === 0) {
         return false;
      }
      divisor += 2;
   }

   return true;
};


var findFactors = function (candidate)
{
   var lower = 2;
   var upper = floor(candidate/2);
};