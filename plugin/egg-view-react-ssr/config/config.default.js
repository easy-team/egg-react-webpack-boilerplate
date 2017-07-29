'use strict';
const path = require('path');

module.exports = app => {
  const config = {};

  /**
   * react ssr config
   * @member Config#react
   * @property {String} [manifest=${baseDir}/app/view/layout.js] - client render template, support renderString compile
   * @property {String} [manifest=${baseDir}/config/manifest.json] - resource dependence(css, js) config
   * @property {String} [manifest=${baseDir}/config/buildConfig.json] - compile config, include `publicPath` and `commonsChunk`
   * @property {Boolean} [injectCss] whether inject href css
   * @property {Boolean} [injectJs] whether inject src script
   * @property {Boolean|String} [crossorigin] js cross domain support for cdn js error catch, default false
   * @property {Array} [injectRes] inline/inject css or js to file head or body. include location and src config
   *           inline {Boolean} true or false, default false
   *           location {String} headBefore, headAfter, bodyBefore, bodyAfter  insert location, default headBefore
   *           url {String} inline file absolution path
   * @property {Function} afterRender hook html after render
   * `publicPath`: static resource prefix path, so cdn domain address prefix or local prefix path(`/`)
   * `commonsChunk`: common js or css filename, so `vendor`
   */
  config.reactssr = {
    layout: path.join(app.baseDir, 'app/view/layout.js'),
    manifest: path.join(app.baseDir, 'config/manifest.json'),
    buildConfig: path.join(app.baseDir, 'config/buildConfig.json'),
    injectCss: true,
    injectJs: true,
    crossorigin: false,
    injectRes: [],
    fallbackToClient: false, // fallback to client rendering if server render failed
    afterRender: (html, context) => { /* eslint no-unused-vars:off */
      return html;
    },
  };

  return config;
};

