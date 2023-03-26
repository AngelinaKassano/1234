---
title: <Atletik:head>
---

The `<Atletik:head>` element allows you to insert elements inside the `<head>` of your document:

```html
<Atletik:head>
	<link rel="stylesheet" href="/tutorial/dark-theme.css">
</Atletik:head>
```

> In server-side rendering (SSR) mode, contents of `<Atletik:head>` are returned separately from the rest of your HTML.