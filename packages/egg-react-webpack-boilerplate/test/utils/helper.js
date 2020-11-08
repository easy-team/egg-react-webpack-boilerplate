
'use strict';
const assert = require('assert');

exports.webpackReady = async (app) => {
  return new Promise((resolve) => {
    app.messenger.on('webpack_build_state', (data) => {
      if (data.state) {
        resolve(data);
      }
    });
  });
}

exports.assertText = function (res, text) {
  assert(res.text.indexOf(text) > -1);
}

exports.assertNotText = function (res, text) {
  assert(res.text.indexOf(text) === -1);
}

exports.assertSSRAppNode = function (res) {
  exports.assertNotText(res, '<div id="app"></div>');
}

exports.assertCSRAppNode = function (res) {
  exports.assertText(res, '<div id="app"></div>');
}

exports.assertDevModeCssResource = function (res, entry) {
  exports.assertText(res, `<link rel="stylesheet" href="/public/css/${entry}.css">`);
}

exports.assertDevModeJSResource = function (res, entry) {
  exports.assertText(res, '<script type="text/javascript" src="/public/js/runtime.js"></script>');
  exports.assertText(res, '<script type="text/javascript" src="/public/js/common.js"></script>');
  exports.assertText(res, `<script type="text/javascript" src="/public/js/${entry}.js"></script>`);
  exports.assertText(res, 'window.__INITIAL_STATE__');
}

exports.assertDevModeResource = function (res, entry) {
  exports.assertDevModeCssResource(res, entry);
  exports.assertDevModeJSResource(res, entry);
}
