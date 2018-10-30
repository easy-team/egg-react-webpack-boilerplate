module.exports = {
  devtool: 'eval',
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  dll: ['react', 'react-dom'],
  loaders: {},
  plugins: {},
  done() {
    console.log('---webpack compile finish---');
  }
};
