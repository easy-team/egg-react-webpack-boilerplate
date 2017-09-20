const path = require('path');
module.exports = {
  egg: true,
  framework: 'react',
  entry: {
    include: ['app/web/page', { layout: 'app/web/view/layout.jsx?loader=false' }],
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/loader.js'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  cssModule: {
    include: 'app/web/page/css/module'
  },
  cssExtract: true,
  loaders: {
    eslint: false,
    css: {
      exclude: []
    }
  },
  onClient(){

  },
  onServer(){

  },
  done(){
    console.log('---webpack compile finish---');
  }
};