#! /usr/bin/perl
use strict;
use warnings;

sub isPrime {
   my $candidate = shift(@_);
   if (!($candidate % 2)) {
      return ($candidate == 2);
   }

   my $sqrRoot = sqrt($candidate);
   my $i = 3;
   while ($i <= $sqrRoot) {
      if (!($candidate % $i)) {
         return 0; #Use this for 'false' in Perl.
      }
      $i += 2;
   }

   return 1; #Use this for 'true' in Perl
}


my $number = 600851475143;
my $biggestPrime = int(sqrt($number));
if (!($biggestPrime % 2)) {
   --$biggestPrime;
}

print "Largest prime factor of $number is: ";

while ($biggestPrime > 1) {
   if (isPrime($biggestPrime) && !($number % $biggestPrime)) {
      print "$biggestPrime\n";
      $biggestPrime = 0;
   }
   $biggestPrime -= 2;
}
