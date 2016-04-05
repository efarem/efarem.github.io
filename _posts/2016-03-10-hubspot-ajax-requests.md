---
title: AJAX Requests and HubSpot Forms
updated: 2016-03-10 18:40
---

So HubSpot don't allow cross origin AJAX requests! This is only a problem because
all of the tracking forms send to a generic forms.hubspot domain.

The way around this is to forward the request through a proxy or in other words
just post the data to your own hosted script and literally forward it on
to HubSpot's original form action url.

__Remember to add an SSL to the proxy endpoint if your HubSpot site is using https__

For quick fixes like this we use [Let's Encrypt](https://letsencrypt.org/).
