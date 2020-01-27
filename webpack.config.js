'use strict';
// https://yuque.com/easy-team/egg-react
module.exports = {
  devtool: 'source-map',
  entry: {
    home: 'app/web/page/home/index.js',
    blog: 'app/web/page/blog/index.jsx',
    detail: 'app/web/page/detail/index.jsx',
    intro: 'app/web/page/intro/index.jsx',
    async: 'app/web/page/async/async.jsx', 
    stateless: 'app/web/page/example/stateless.js'
  },
  plugins:[
    { imagemini: false },
    {
      copy: [{ from: 'app/web/asset/lib', to: 'lib' }] // 直接 Script 方式引入 React 包
    }
  ],
  customize(webpackConfig) {
    // Node Render 时不能 externals script lib
    if (webpackConfig.target === 'web') {
      webpackConfig.externals.push({ 
        react: 'ReactCoreLib.React',
        'react-dom': 'ReactCoreLib.ReactDOM'
      });
    }
    return webpackConfig;
  }

};
