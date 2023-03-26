---
title: <Atletik:window>
---

Just as you can add event listeners to any DOM element, you can add event listeners to the `window` object with `<Atletik:window>`.

On line 11, add the `keydown` listener:

```html
<Atletik:window on:keydown={handleKeydown}/>
```

> As with DOM elements, you can add [event modifiers](/tutorial/event-modifiers) like `preventDefault`.
