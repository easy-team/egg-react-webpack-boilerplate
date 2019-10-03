module.exports = {
  entry: {
    app: 'app/web/page/app/index.js',
    js: 'app/web/page/js/index.js',
    jsx: 'app/web/page/jsx/index.jsx'
  },
  plugins:[
    { serviceworker: true }
  ]
};
