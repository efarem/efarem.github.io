---
title: Finally an O(1) Solution
updated: 2016-04-29 18:00
---

I wrote a few bad solutions for Project Euler in PHP a while back and I figured
it is time to go back and do it more efficiently, and in C++!

Problem 1 in O(1)!
{: style="text-align: center; font-size: 1.2em; font-weight: 500; margin-bottom: 1.5em;"}

So my first solution incremented variable `i` from `1 > n-1` each time testing if `i` was a multiple of 3 or
5 and adding to a total if it was. Fine... this works but `O(n)` doesn't do too well if
we're testing cases up to say `10^9` plus PHP < 7.0 doesn't like large integers without using bcmath.

So with a small amount of digging I found a simple arithmetic progression formula
for calculating a sum of multiples `(n/2)*(a+b)` where __a__ is the number in question
__b__ is the upper limit (highest number divisible by the number in question) and
__n__ is __b__ divided by __a__.

So after running the sum of multiples below __1000__ for __3__:

`(333/2) * (3+999) = 166.5 * 1002 = 166,833`

And __5__:

`(199/2) * (5+995) = 99.5 * 1000 = 99,500`

All you need to do is remove the sum of multiples that have been accounted for by 3 __*and*__ 5. You
can do this be subtracting the sum of multiples of 15:

`(66/2) * (15+990) = 33 * 1005 = 33,165`

From the sum of the previous two totals:

`166,833 + 99,500 - 33,165 = 233,168`

There you have it, with this in place my new solution achieves `O(1)`, tested for any case up to
and including 10^9.

It still doesn't pass the Hacker Rank tests, wtf!...
{: style="text-align: center; font-size: 1.2em; font-weight: 500; margin-bottom: 1.5em;"}

The division by 2 causes a rounding error even when using `float` or even `long double`
so I had to find another formula, luckily there is another `n*(x*(x+1)/2)` where __n__ is
the number we're searching for multiples of and __x__ is the upper limit divided by __n__.

Here's a link to my solution [on Github](https://github.com/efarem/project-euler-cpp/blob/master/001.cpp).
