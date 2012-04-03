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

var LCM1 = function (upper)
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


var LCM2 = function (upper)
{
    var sequence = Array();
    var primes = [2, 3, 5, 7, 11, 13, 17, 19];
    var primesOfLCM = Array();

    for (var i = 0; i < upper; ++i) {
	sequence.push(i+1);
    }

    var divided;
    for (var i = 0; i < primes.length; ++i) {
	do {
	    divided = false;
	    for (var j = 0; j < upper; ++j) {
		if ((sequence[j] % primes[i]) === 0) {
		    divided = true;
		    sequence[j] /= primes[i];
		}
	    }
	    if (divided) {
		primesOfLCM.push(primes[i]);
	    }
	} while (divided);
    }

    var result = 1;
    for (var i = 0; i < primesOfLCM.length; ++i) {
	result *= primesOfLCM[i];
    }
    return result;
};


console.log(LCM2(20));
