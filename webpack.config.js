module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'eval',
  entry: {
    app: 'app/web/page/app/index.jsx',
    list: 'app/web/page/list/index.jsx'
  },
  dll: ['react', 'react-dom'],
  loaders: {},
  plugins: {},
  done() {
    console.log('---webpack compile finish---');
  }
};
