const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  devtool: 'source-map',
  entry: {
    tab: 'app/web/page/ant/tab/tab.jsx'
  },
  resolve: {
    extensions: ['.less']
  },
  lib: ['react', 'react-dom'],
  loaders: {
    eslint: false,
    babel: {
      include: [resolve('app/web'), resolve('node_modules')]
    },
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': 'red',
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