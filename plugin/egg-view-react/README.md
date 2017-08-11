# egg-view-react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-react
[travis-image]: https://img.shields.io/travis/eggjs/egg-view-react.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-view-react
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-view-react.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-view-react?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-view-react.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-view-react
[snyk-image]: https://snyk.io/test/npm/egg-view-react/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-view-react
[download-image]: https://img.shields.io/npm/dm/egg-view-react.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-react

egg view plugin for react

## Install

```bash
$ npm i egg-view-react --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.react = {
  enable: true,
  package: 'egg-view-react',
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Example

React server side render example, please see [egg-react-webpack-boilerplate](https://github.com/hubcarl/egg-react-webpack-boilerplate)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
