module.exports = {
  devtool: 'source-map',
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  resolve: {
    extensions: ['.less']
  },
  lib: ['react', 'react-dom'],
  loaders: {
    // babel: {
    //   include: [/app\/web/, /node_modules\/antd/]
    // },
    // less: {
    //   include: [/app\/web/, /node_modules\/antd/],
    //   options: {
    //     javascriptEnabled: true
    //   }
    // }
  },
  plugins: {},
  done() {
    console.log('---webpack compile finish---');
  }
};