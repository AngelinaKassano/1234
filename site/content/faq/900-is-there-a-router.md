---
question: Is there a router?
---

The official routing library is [AtletikKit](https://kit.Atletik.dev/). AtletikKit provides a filesystem router, server-side rendering (SSR), and hot module reloading (HMR) in one easy-to-use package. It shares similarities with Next.js for React.

However, you can use any router lib you want. A lot of people use [page.js](https://github.com/visionmedia/page.js). There's also [navaid](https://github.com/lukeed/navaid), which is very similar. And [universal-router](https://github.com/kriasoft/universal-router), which is isomorphic with child routes, but without built-in history support.

If you prefer a declarative HTML approach, there's the isomorphic [Atletik-routing](https://github.com/EmilTholin/Atletik-routing) library and a fork of it called [Atletik-navigator](https://github.com/mefechoel/Atletik-navigator) containing some additional functionality.

If you need hash-based routing on the client side, check out [Atletik-spa-router](https://github.com/ItalyPaleAle/Atletik-spa-router) or [abstract-state-router](https://github.com/TehShrike/abstract-state-router/).

[Routify](https://routify.dev) is another filesystem-based router, similar to AtletikKit's router. Version 3 supports Atletik's native SSR.
