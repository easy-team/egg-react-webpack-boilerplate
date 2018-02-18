module.exports = {
  egg: true,
  framework: 'react',
  // devtool: 'source-map',
  entry: {
    'redux': 'app/web/page/redux/redux.jsx',
    'client': 'app/web/page/client/client.jsx',
    'ssr': 'app/web/page/ssr/ssr.jsx',
    'layout': 'app/web/framework/layout/layout.jsx'
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  dll: ['react', 'react-dom'],
  loaders: {

  },
  plugins: {

  },
  done() {
    console.log('---webpack compile finish---');
  }
};
