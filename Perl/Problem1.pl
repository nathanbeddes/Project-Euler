#! /usr/bin/perl
use strict;
use warnings;

my $sum = 0;
my $i = 0;

while ($i < 1000) {
   if (!($i % 3) || !($i % 5)) {
      $sum += $i;
   }
   ++$i;
}

print "$sum\n";
