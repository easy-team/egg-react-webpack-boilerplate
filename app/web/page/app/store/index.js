import { createStore } from 'redux';
import reducers from './reducers';
export default createStore(
  reducers, {
    ...window.__INITIAL_STATE__,
    list: [{
      id: 0,
      title: 'React Node Web Framework 文档',
      summary: '基于 Eggjs + React + Webpack 实现的 Node React Web 框架文档',
      hits: 550,
      url: 'https://github.com/hubcarl/Res-react-webpack-boilerplate'
    }, {
      id: 1,
      title: 'React Node Web Framework',
      summary: '基于 Eggjs + React + Webpack 实现的 Node React Web 框架',
      hits: 550,
      url: 'https://github.com/easy-team/res'
    }, {
      id: 2,
      title: 'React Node Web Framework Command Tool',
      summary: 'React Node Web Framework Command Tool',
      hits: 150,
      url: 'https://github.com/easy-team/res-cli'
    }]
  });
