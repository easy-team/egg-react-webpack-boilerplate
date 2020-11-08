'use strict';
// https://yuque.com/easy-team/egg-react
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHardiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: {
    // 服务端渲染 https://www.yuque.com/easy-team/egg-react/node
    blog: 'app/web/page/blog/index.js',
    blogx: 'app/web/page/blog/index.jsx',
    list: 'app/web/page/list/index.jsx',
    detail: 'app/web/page/detail/index.jsx',
    intro: 'app/web/page/intro/index.jsx',
    async: 'app/web/page/example/async/index.jsx',
    login: 'app/web/page/login/index.jsx',
    // 单页面前端渲染 https://www.yuque.com/easy-team/egg-react/web
    spa: 'app/web/page/spa/index.jsx',
    // html 前端渲染 https://www.yuque.com/easy-team/egg-react/html
    'html/simple': 'app/web/page/html/simple.jsx',
    'html/spa': 'app/web/page/html/spa.jsx',
    // asset 前端渲染 https://www.yuque.com/easy-team/egg-react/asset
    'asset/simple': 'app/web/page/asset/simple.jsx',
    'asset/spa': 'app/web/page/asset/spa.jsx',
    // 服务端渲染 https://www.yuque.com/easy-team/egg-react/node
    example: 'app/web/page/example/index.jsx',
    'example/node': 'app/web/page/example/node.jsx',
    'example/data': 'app/web/page/example/data.jsx',
    'example/hook': 'app/web/page/example/hook.jsx',
    'example/context': 'app/web/page/example/context.jsx',
    'example/stateless': 'app/web/page/example/stateless.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['runtime','common', 'html/spa'],
      filename: '../view/spa.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['runtime','common', 'html/simple'],
      filename: '../view/simple.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new HtmlWebpackHardiskPlugin({
      outputPath: path.resolve(__dirname, 'app/view')
    })
  ]
};
