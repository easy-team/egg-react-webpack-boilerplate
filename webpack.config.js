module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'source-map',
  entry: {
    include: ['app/web/page',
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
  dll: ['react', 'react-dom'],
  loaders: {},
  plugins: {
    imagemini: false
  },
  done() {
    console.log('---webpack compile finish---');
  }
};
