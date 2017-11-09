const path = require('path');
module.exports = {
  egg: true,
  framework: 'react',
  entry: {
    include: ['app/web/page',
      { layout: 'app/web/framework/layout/layout.jsx?loader=false' },
      { 'spa/redux': 'app/web/page/spa/redux.jsx?loader=false' },
      { 'spa/client': 'app/web/page/spa/client.jsx?loader=false' },
      { 'spa/ssr': 'app/web/page/spa/ssr.jsx?loader=false' }
    ],
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
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
    less: false,
    stylus: false
  },
  plugins: {
    imagemini: false,
    buildfile: false,
    manifest: false,  // old manifest feature
    manifestDeps: true // new manifest feature, not need buildfile
  },
  onClient(){

  },
  onServer(){

  },
  done(){
    console.log('---webpack compile finish---');
  }
};