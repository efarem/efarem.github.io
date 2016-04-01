---
title: Linear Search
updated: 2016-03-01 07:00
---

### What is Linear Search

Linear search is a method of finding a single item from a list of items.

To perform a linear search you would examine each item in a list sequentially and unlike some search algorithms it is __not__ required that the items are sorted.

### Example

````
function search(haystack, needle)
{
    for (let i = 0; i < haystack.length; i++)
        if (haystack[i].id == needle)
            return haystack[i];
            
	return null;
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

`O(n)` determined by the amount of items.