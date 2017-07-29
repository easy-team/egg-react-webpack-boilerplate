'use strict';
const path = require('path');
module.exports = app => {
  const config = {};
  config.webpackreact = {
    manifest: path.join(app.baseDir, 'config/manifest.json'),
  };
  return config;
};

