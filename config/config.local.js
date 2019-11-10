
const ip = require('ip');
const easywebpack = require('@easy-team/easywebpack-react');
module.exports = () => {
  const exports = {};

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: ['build'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config'] // 指定过滤的目录（包括子目录）
  };

  exports.reactssr = {
    injectCss: true
  };

  exports.webpack = {
    webpackConfigList: easywebpack.getWebpackConfig()
  };

  return exports;
};
