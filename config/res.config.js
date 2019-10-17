'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  target: 'web',
  entry: {
    app: 'app/web/page/app/app.js',
    test: 'app/web/page/test/index.js'
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
  ]
};
