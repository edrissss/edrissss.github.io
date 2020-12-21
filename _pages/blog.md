---
title: پست‌های وبلاگ
description: "لیست نوشته‌های من"
og-type: website
permalink: /blog
nav: blog
---

{% for post in site.posts %}
{% unless post.categories contains "unlisted" or post.categories contains "now" %}
{% include blog-listing.html %}
{% endunless %}
{% endfor %}

 
