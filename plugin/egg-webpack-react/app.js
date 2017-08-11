'use strict';
const path = require('path');
const Manifest = require('webpack-manifest-normalize');
const vm = require('vm');
const NativeModule = require('module');
module.exports = app => {
  if (app.view) {
    app.view.resolve = function* (name) {
      return name;
    };
  }

  if (app.react) {
    app.react.render = function* (name, locals, options) {
      const filePath = path.isAbsolute(name) ? name : path.join(app.config.view.root[0], name);
      const code = yield app.webpack.fileSystem.readWebpackMemoryFile(filePath, name);
      if (!code) {
        throw new Error(`read webpack memory file[${filePath}] content is empty, please check if the file exists`);
      }
      const wrapper = NativeModule.wrap(code);
      vm.runInThisContext(wrapper)(exports, require, module, __filename, __dirname);
      const reactClass = module.exports;
      if (options && options.markup) {
        return app.react.renderToStaticMarkup(reactClass, locals);
      }
      return app.react.renderToString(reactClass, locals);
    };
  }

  app.messenger.on(app.webpack.Constant.EVENT_WEBPACK_BUILD_STATE, data => {
    if (data.state) {
      const filepath = app.config.webpackreact.manifest;
      const promise = app.webpack.fileSystem.readWebpackMemoryFile(filepath);
      promise.then(content => {
        if (content) {
          Manifest.saveFile(filepath, content);
          app.messenger.sendToApp('webpack_manifest_save_success', { state: true });
        }
      });
    }
  });
};