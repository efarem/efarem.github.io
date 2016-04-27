---
title: Insertion Sort
updated: 2016-04-27 18:00
---

### What is Insertion Sort

Insertion sort is an efficient way of sorting small arrays of data. The way it
works is to start with the second element `e[1]` and compare with each element to it's
left one by one, if the compared value is lesser (decided by the `cmp` callback)
then it is shifted one place to the right.

In the below example I have dealt with the comparison by delegating to a callback
function for flexibility.

````
/**
 * Sort an array using the insertion sort algorithm
 */
function insertion(e, cmp) {

	for (var j = 1; j < e.length; j++) {
		var current = e[j];
		var i = j-1;
		while (i >= 0 && cmp(e[i], current)) {
			e[i+1] = e[i];
			i--;
		}
		e[i+1] = num;
	}

	return e;
}

/**
 * Compares two integers
 */
function cmp(x, y) {
	return x > y;
}

/**
 * Compares two User objects
 */
function cmpuser(x, y) {
	return x.age > y.age;
}

/**
 * Create a new User object
 */
function User(age) {
	this.age = age;
}

// Examples

console.log(insertion([312,23,24,3534,564,65,767,68,566,3445,765,874,63,468], cmp));
console.log(insertion([
	new User(3),
	new User(42),
	new User(6),
	new User(34),
	new User(7),
	new User(32)
], cmpuser));
````
