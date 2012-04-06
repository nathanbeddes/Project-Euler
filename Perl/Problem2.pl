#! /usr/bin/perl
use strict;
use warnings;

my $sum = 0;
my $fib1 = 1;
my $fib2 = 1;
my $fibNext = 0;

while ($fibNext <= 4000000) {
      $fibNext = $fib1 + $fib2;
      $fib1 = $fib2;
      $fib2 = $fibNext;
      if (!($fibNext % 2)) {
         $sum += $fibNext;
      }
}

print "$sum\n";
