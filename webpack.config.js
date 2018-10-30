const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  devtool: 'source-map',
  entry: {
    tab: 'app/web/page/ant/tab/tab.js'
  },
  resolve: {
    extensions: ['.less']
  },
  lib: ['react', 'react-dom'],
  loaders: {
    babel: {
      include: [resolve('app/web'), resolve('node_modules')]
    },
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        }
      }
    }
  },
  plugins: {},
  done() {
    console.log('---webpack compile finish---');
  }
};