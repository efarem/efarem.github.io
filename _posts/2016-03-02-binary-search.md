---
title: Binary Search
updated: 2016-03-02 07:00
---

### What is Binary Search

__Binary search__ is an algorithm for finding an item from a list of items. Put very simply it works by choosing the middle item and discarding the half which doesn't contain the value you're looking for.

### Example usage

A common use of __binary search__ is to search for one specific item in an array, suppose you had a sorted array of `1,000,000,000` user objects and were tasked with finding one by id. The easiest way would be to use a [linear search](/2016/03/01/linear-search) or in other words examine each item one by one from start to finish until you find a matching result meaning you could be iterating up to `1,000,000,000` times, needless to say this would be slightly inefficient `O(n)` especially given the length of the array.

In cases like this one a __binary search__ would be far more efficient, resulting in a maximum of ~30 iterations compared to the 1 bilion of a [linear search](/2016/03/01/linear-search).

Here's an example in JavaScript to demonstrate how it might work.

````
function search(haystack, needle)
{            
	let midpoint = Math.floor(haystack.length / 2);

	if (haystack[midpoint].id == needle)
	{
		return haystack[midpoint];
	}
	else if (needle < haystack[midpoint].id)
	{
		return search(haystack.splice(0, midpoint), needle);
	}
	else if (needle > haystack[midpoint].id)
	{
		return search(haystack.splice(midpoint+1, haystack.length), needle);
	}
	else
	{
		return null;
	}
};

var items = [
	{ id: 1, name: "Frank Martin" },
	{ id: 23, name: "Tom Riddle" },
	{ id: 34, name: "Ron Weasley" },
	{ id: 89, name: "Harry Potter" },
	{ id: 233, name: "Hermione Granger" }
];

console.log(search(items.slice(0), 89));
console.log(search(items.slice(0), 23));
console.log(search(items.slice(0), 34));
console.log(search(items.slice(0), 89));
console.log(search(items.slice(0), 233));

````

### Big O

`O(log(n))` on each iteration the number of possible matches decreases logarithmically.