/*
2520 is the smallest number that can be divided by each of the numbers from 1 to
10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/
/*
Answer:
232792560
*/

var LMC = function (upper)
{
   var sequence = Array();
   for (var i = 0; i < upper; ++i) {
      sequence.push(i+1);
   }
   
   var min = 1;
   var max = upper;
   while (true) {
      min = max;
      for (var i = 0; i < upper; ++i) {
         if (min > sequence[i]) {
            min = sequence[i];
         }
      }
      
      if (min === max) {
         break;   
      }
      
      max = 1;
      for (var i = 0; i < upper; ++i) {
         if (sequence[i] === min) {
            sequence[i] += i+1;
         }
         if (max < sequence[i]) {
            max = sequence[i];
         }
      }
   }

   return sequence[0];
};

//console.log(LCM1(10));
//console.log(2520);
console.log(232792560);