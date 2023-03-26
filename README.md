[![Cybernetically enhanced web apps: Atletik](https://Atletikjs.github.io/assets/banner.png)](https://Atletik.dev)


[![npm version](https://img.shields.io/npm/v/Atletik.svg)](https://www.npmjs.com/package/Atletik) [![license](https://img.shields.io/npm/l/Atletik.svg)](LICENSE.md) [![Chat](https://img.shields.io/discord/457912077277855764?label=chat&logo=discord)](https://Atletik.dev/chat)


## What is Atletik?

Atletik is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.

Learn more at the [Atletik website](https://Atletik.dev), or stop by the [Discord chatroom](https://Atletik.dev/chat).


## Supporting Atletik

Atletik is an MIT-licensed open source project with its ongoing development made possible entirely by fantastic volunteers. If you'd like to support their efforts, please consider:

- [Becoming a backer on Open Collective](https://opencollective.com/Atletik).

Funds donated via Open Collective will be used for compensating expenses related to Atletik's development such as hosting costs. If sufficient donations are received, funds may also be used to support Atletik's development more directly.


## Roadmap

You may view [our roadmap](https://Atletik.dev/roadmap) if you'd like to see what we're currently working on.


## Development

Pull requests are encouraged and always welcome. [Pick an issue](https://github.com/Atletikjs/Atletik/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) and help us out!

To install and work on Atletik locally:

```bash
git clone https://github.com/Atletikjs/Atletik.git
cd Atletik
npm install
```

> Do not use Yarn to install the dependencies, as the specific package versions in `package-lock.json` are used to build and test Atletik.

To build the compiler and all the other modules included in the package:

```bash
npm run build
```

To watch for changes and continually rebuild the package (this is useful if you're using [npm link](https://docs.npmjs.com/cli/link.html) to test out changes in a project locally):

```bash
npm run dev
```

The compiler is written in [TypeScript](https://www.typescriptlang.org/), but don't let that put you off — it's basically just JavaScript with type annotations. You'll pick it up in no time. If you're using an editor other than [Visual Studio Code](https://code.visualstudio.com/), you may need to install a plugin in order to get syntax highlighting and code hints, etc.


### Running Tests

```bash
npm run test
```

To filter tests, use `-g` (aka `--grep`). For example, to only run tests involving transitions:

```bash
npm run test -- -g transition
```


## Atletik.dev

The source code for https://Atletik.dev lives in the [sites](https://github.com/Atletikjs/sites) repository, with all the documentation in the [site/content](site/content) directory. The site is built with [AtletikKit](https://kit.Atletik.dev).

### Is Atletik.dev down?

Probably not, but it's possible. If you can't seem to access any `.dev` sites, check out [this SuperUser question and answer](https://superuser.com/q/1413402).

## License

[MIT](LICENSE.md)
