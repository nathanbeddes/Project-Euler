/*
  A palindromic number reads the same both ways. The largest palindrome made
  from the product of two 2-digit numbers is 9009 = 91 * 99.

  Find the largest palindrome made from the product of two 3-digit numbers.
*/
/*
  Answer:
  906609
*/

var checkPalindrome = function (word)
{
   var end = word.length - 1;
   var start = 0;

   while (start < end) {
      if (word.charAt(start) != word.charAt(end)) {
         return false;
      }
      ++start;
      --end;
   }
   
   return true;
};


var highestCandidate = 0;
var highestX = 0;
var highestY = 0;
var xStop = 0;
for (var x = 999; x > xStop; --x) {
   for(var y = x; y > 0; --y) {
      var candidate = x*y;
      if (checkPalindrome(candidate.toString())) {
         if (candidate > highestCandidate) {
            highestCandidate = candidate;
            xStop = y;
            highestX = x;
            highestY = y;
         }
         break;
      }
   }
}

console.log(highestX+"*"+highestY+": "+highestCandidate);
