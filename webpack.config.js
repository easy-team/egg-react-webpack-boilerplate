const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = {
  egg: true,
  target: 'web',
  entry: {
    app: 'app/web/page/app/app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../app/view/layout.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new WriteFilePlugin({
      test: /\.tpl$/
    })
  ]
};
