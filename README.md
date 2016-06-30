# generator-tb-component [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generates a React component in a directory along with styles (scss), optional Relay wrapper, and optional examples file to be used with react-styleguidist

## Installation

First, install [Yeoman](http://yeoman.io) and generator-tb-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-tb-component
```

Then generate your new component:

```bash
yo tb-component ComponentName [src//parent/directory]
```

If you don't include a path as the second argument,
the component directory will be created in the current working directory.

## License

BSD-3-Clause © [Idris Mokhtarzada](https://www.truebill.com/)


[npm-image]: https://badge.fury.io/js/generator-tb-component.svg
[npm-url]: https://npmjs.org/package/generator-tb-component
[travis-image]: https://travis-ci.org/idris/generator-tb-component.svg?branch=master
[travis-url]: https://travis-ci.org/idris/generator-tb-component
[daviddm-image]: https://david-dm.org/idris/generator-tb-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/idris/generator-tb-component
[coveralls-image]: https://coveralls.io/repos/idris/generator-tb-component/badge.svg
[coveralls-url]: https://coveralls.io/r/idris/generator-tb-component
