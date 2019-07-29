const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = {
  target: 'web',
  cssExtract: false,
  entry: {
    app: 'app/web/page/app/app.js'
  },
  output: {
    path: path.join(__dirname, 'app/public'),
    publicPath: '/public/'
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
