<?php
// Bayan Alharbi - 2305950
// Lab 10, question 1: a power function that takes two parameters and returns the result.

// I used recursion: base^exp = base * base^(exp - 1), and anything to the power 0 is 1
function power($base, $exp)
{
    if ($exp == 0) {
        return 1;
    }
    // negative exponent: 2^-2 is the same as 1 / (2^2)
    if ($exp < 0) {
        return 1 / power($base, -$exp);
    }
    return $base * power($base, $exp - 1);
}

// a few examples to check it works
echo "2 ^ 10 = " . power(2, 10) . "<br>";
echo "5 ^ 3 = " . power(5, 3) . "<br>";
echo "7 ^ 0 = " . power(7, 0) . "<br>";
echo "2 ^ -2 = " . power(2, -2) . "<br>";
