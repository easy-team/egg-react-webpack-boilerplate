'use strict';
// https://yuque.com/easy-team/egg-react
module.exports = {
  devtool: 'source-map',
  entry: {
    blog: 'app/web/page/blog/index.js',
    blogx: 'app/web/page/blog/index.jsx',
    list: 'app/web/page/list/index.jsx',
    detail: 'app/web/page/detail/index.jsx',
    intro: 'app/web/page/intro/index.jsx',
    async: 'app/web/page/example/async/index.jsx',
    'example/stateless': 'app/web/page/example/stateless.js',
    'example/node': 'app/web/page/example/node.jsx',
    'example/data': 'app/web/page/example/data.jsx',
    'example/hook': 'app/web/page/example/hook.jsx',
    'example/context': 'app/web/page/example/context.jsx'
  },
  plugins:[
    { imagemini: false },
    {
      copy: {
        patterns: [{ from: 'app/web/asset/lib', to: 'lib' }]
      } // 直接 Script 方式引入 React 包
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
