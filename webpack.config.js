module.exports = {
  devtool: 'eval',
  entry: {
    'redux': 'app/web/page/redux/redux.js',
    'client': 'app/web/page/client/client.js',
    'ssr': 'app/web/page/ssr/ssr.js',
    'layout': 'app/web/framework/layout/layout.js'
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
