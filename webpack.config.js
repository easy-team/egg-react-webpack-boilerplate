module.exports = {
  entry: {
    app: 'app/web/page/app/index.js',
    list: 'app/web/page/list/index.jsx',
    stateless: 'app/web/page/list/stateless.js',
    promise: 'app/web/page/list/promise.js'
  },
  plugins:[
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
