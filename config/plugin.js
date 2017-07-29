const path = require('path');
const pluginDir = path.join(__dirname, '../plugin');

exports.static = true;

exports.react = {
  enable: true,
  path: path.join(pluginDir, 'egg-view-react')
};

exports.reactssr = {
  enable: true,
  path: path.join(pluginDir, 'egg-view-react-ssr')
};
