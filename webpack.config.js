const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  devtool: 'eval',
  entry: {
    tab: 'app/web/page/ant/tab/tab.jsx'
  },
  dll: ['react', 'react-dom'],
  loaders: {
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