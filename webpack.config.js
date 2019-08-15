'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = {
  target: 'web',
  entry: {
    app: 'app/web/page/app/app.js',
    test: 'app/web/page/test/index.js'
  },
  output: {
    path: path.join(__dirname, 'app/public'),
    publicPath: '/public/'
  },
  loaders: {
    typescript: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['runtime','common', 'app'],
      filename: '../view/app.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new HtmlWebpackPlugin({
      chunks: ['runtime','common', 'test'],
      filename: '../view/test.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new WriteFilePlugin({
      test: /\.tpl$/
    })
  ]
};
