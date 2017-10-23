import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from 'component/spa/redux/reducers'
export default createStore(
  reducers, {
    list: [{
      id: 1,
      title: 'webpack配置官方文档',
      summary: 'webpack is a module bundler for modern JavaScript applications.',
      hits: 550,
      url: 'https://webpack.js.org/configuration/'
    }, {
      id: 2,
      title: 'egg-为企业级框架和应用而生',
      summary: 'Born to buildbetter enterprise frameworks and apps with Node.js & Koa',
      hits: 278,
      url: 'https://eggjs.org/'
    }]
  });