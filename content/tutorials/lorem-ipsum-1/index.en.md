---
title: "Lorem Ipsum 1 (US)"
description: ""
date: 2021-05-29T03:24:58-03:00
lastmod: 2021-05-29T03:24:58-03:00
draft: false
images: []
url: /tutorials/lorem-ipsum-1
---


## Scene

Setup a basic fullscreen scene using the example from the official docs:



{{< highlight javascript >}}
const res = fetchBlogPost();

// 😒 Meh Code
const user = res.user;
const title = res.title;
const body = res.text;

// 🤯 Destructured Code
const { user, title, text } = res;
{{< /highlight >}}
