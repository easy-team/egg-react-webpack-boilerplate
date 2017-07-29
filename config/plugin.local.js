const path = require('path');
const pluginDir = path.join(__dirname, '../plugin');
exports.cors = {
  enable: true,
  package: 'egg-cors'
};

exports.webpack = {
  enable: true,
  package: 'egg-webpack'
};

exports.webpackreact = {
  enable: true,
  path: path.join(pluginDir, 'egg-webpack-react')
};