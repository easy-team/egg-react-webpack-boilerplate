import { createStore } from 'redux';
import reducers from './reducers';
export default createStore(
  reducers, {
    ...window.__INITIAL_STATE__,
    list: [{
      id: 0,
      title: 'React Web Framework Application',
      summary: 'React Web Framework',
      hits: 550,
      url: 'https://github.com/easy-team/res-awesome'
    }, {
      id: 1,
      title: 'React Web Framework',
      summary: 'React Server Side Render Web Framework',
      hits: 550,
      url: 'https://github.com/easy-team/res'
    }, {
      id: 2,
      title: 'React Web Framework CLI',
      summary: 'res command tool, support init Reac boilerplate',
      hits: 278,
      url: 'https://github.com/easy-team/res-cli'
    }]
  });
