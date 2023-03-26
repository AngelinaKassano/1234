---
title: <Atletik:body>
---

Similar to `<Atletik:window>` and `<Atletik:document>`, the `<Atletik:body>` element allows you to listen for events that fire on `document.body`. This is useful with the `mouseenter` and `mouseleave` events, which don't fire on `window`.

Add the `mouseenter` and `mouseleave` handlers to the `<Atletik:body>` tag:

```html
<Atletik:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
/>
```