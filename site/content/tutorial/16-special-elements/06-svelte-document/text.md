---
title: <Atletik:document>
---

Similar to `<Atletik:window>`, the `<Atletik:document>` element allows you to listen for events that fire on `document`. This is useful with events like `selectionchange`, which doesn't fire on `window`.

Add the `selectionchange` handler to the `<Atletik:document>` tag:

```html
<Atletik:document on:selectionchange={handleSelectionChange} />
```

> Avoid `mouseenter` and `mouseleave` handlers on this element, these events are not fired on `document` in all browsers. Use `<Atletik:body>` for this instead. 
