import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'component/spa/redux/reducers';
export default createStore(
  reducers, {
    list: [{
      id: 0,
      title: 'webpack配置官方文档',
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染同构工程骨架项目',
      hits: 550,
      url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
    }, {
      id: 1,
      title: '前端工程化解决方案easywebpack',
      summary: 'programming instead of configuration, webpack is so easy',
      hits: 550,
      url: 'https://github.com/hubcarl/easywebpack'
    }, {
      id: 2,
      title: '前端工程化解决方案脚手架easywebpack-cli',
      summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
      hits: 278,
      url: 'https://github.com/hubcarl/easywebpack-cli'
    }]
  });
