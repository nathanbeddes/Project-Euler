/*
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a^2 + b^2 = c^2

 For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.
 */
/*
 Answer:
 31875000
 */


var pythagoreanTriplet = function ()
{
   var c = 998;
   for (; c > 1; --c) {
      var c2 = c*c;
      var a = 1;
      var b = 1000 - c - a;
      for (; a < b; ++a, --b) {
         if ((a*a + b*b) === c2) {
            return a*b*c;
         }
      }
   }
};


console.log(pythagoreanTriplet());
