---
title: Project Euler - Problem One
updated: 2016-04-29 18:00
---
So a while ago I set myself the goal of completing one project Euler solution
every week. Long story short, didn't stick to it... although I did complete the first
few.

Recently I stumbled across a site called Hacker Rank which gave me a bit of incentive
to dig further into some algo problems. Basically you get points and badges :D which sounds
stupid but it _has_ pushed me to do a bit more.

Anyway, much to my dismay the original PHP solution I wrote failed some of the unit
tests. The reason it failed was for taking too long to execute...! There
was my moment of clarity.

I will not be beaten by problem #1!
{: style="text-align: center; font-size: 1.2em; font-weight: 500; margin-bottom: 1.5em;"}

So my first solution I looped from `1 > n-1` each time testing if `i` was a multiple of 3 or
5 and adding to a total if it was. Fine... this works but `O(n)` doesn't do too well if
we're testing cases up to `10^9`.

So with a small amount of digging I found a simple formula for calculating the sum of
multiples `(n/2)*(a+b)` where __a__ is the number in question __b__ is the upper limit (highest
number divisible by the number in question) and __n__ is __b__ divided by __a__.

So after running the sum of multiples below __1000__ for __3__:

`(333/2) * (3+999) = 166.5 * 1002 = 166,833`

And __5__:

`(199/2) * (5+995) = 99.5 * 1000 = 99,500`

All you need to do is remove the sum of multiples that have been accounted for by 3 __*and*__ 5. You
can do this be subtracting the sum of multiples of 15:

`(66/2) * (15+990) = 33 * 1005 = 33,165`

From the sum of the previous two totals:

`166,833 + 99,500 - 33,165 = 233,168`

There you have it, with this in place my new solution fires in milliseconds for any case up to
and including 10^9.

__But wait!__ It still doesn't bloody pass the Hacker Rank tests, wtf! After a bit of digging
I found that the highest integer for PHP (at least for versions < 7) is 2147483647 which
the resulting value of the 10^9 test is higher than.

Conclusion, maybe PHP < 7.0 just sucks for this type of task, I'll have to continue in a different language.
{: style="text-align: center; font-size: 1.2em; font-weight: 500; margin-bottom: 1.5em;"}

Here's a link to my solution [on Github](https://github.com/efarem/project-euler-php/blob/master/001.php).
