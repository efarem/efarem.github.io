---
title: Submitting Unrendered Forms in JavaScript
updated: 2016-03-15 07:00
---

I've been working on a payment gateway integration for Global Iris, for the first version I constructed a form in memory and submitted without adding to the DOM.

In testing, Chrome and Safari presented no issues; however there were problems with IE and Firefox, as a note myself and whoever else stumbles across the same issue __Firefox and IE (at the time of writing) require forms to be added to the DOM before you can submit via JavaScript's `submit()` method.__