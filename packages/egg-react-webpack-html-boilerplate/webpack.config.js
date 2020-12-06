'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHardiskPlugin = require('html-webpack-harddisk-plugin');
// html 前端渲染 https://www.yuque.com/easy-team/egg-react/html
module.exports = {
  target: 'web',
  entry: {
    'html/simple': 'app/web/page/html/simple.jsx',
    'html/spa': 'app/web/page/html/spa.jsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['runtime', 'common', 'html/spa'],
      filename: '../view/spa.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['runtime', 'common', 'html/simple'],
      filename: '../view/simple.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new HtmlWebpackHardiskPlugin({
      outputPath: path.resolve(__dirname, 'app/view')
    })
  ]
};
