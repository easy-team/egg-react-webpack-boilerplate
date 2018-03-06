import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {match, RouterContext} from 'react-router'
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { AppContainer } from 'react-hot-loader';
import Layout from 'framework/layout/layout.jsx';
import Header from 'component/header/header';
import SSR from 'component/spa/ssr/ssr';
import { create } from 'component/spa/ssr/store';
import routes from 'component/spa/ssr/routes'
import './spa.css';
const clientRender = () => {
  const store = create(window.__INITIAL_STATE__);
  const url = store.getState().url;
  const Entry = () => (<div>
    <Header></Header>
    <Provider store={ store }>
      <BrowserRouter>
        <SSR url={ url }/>
      </BrowserRouter>
    </Provider>
  </div>
  );
  const render = (App)=>{
    ReactDOM.hydrate(EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />, document.getElementById('app'));
  };
  if (EASY_ENV_IS_DEV && module.hot) {
    module.hot.accept();
  }
  render(Entry);
};

const serverRender = (context, options)=> {
  const url = context.state.url;
  const branch = matchRoutes(routes, url);
  const promises = branch.map(({route}) => {
    const fetch = route.component.fetch;
    return fetch instanceof Function ? fetch() : Promise.resolve(null)
  });
  return Promise.all(promises).then(data => {
    const initState = context.state;
    data.forEach(item => {
      Object.assign(initState, item);
    });
    context.state = Object.assign({}, context.state, initState);
    const store = create(initState);
    return () =>(
      <Layout>
        <div>
          <Header></Header>
          <Provider store={store}>
            <StaticRouter location={url} context={{}}>
              <SSR url={url}/>
            </StaticRouter>
          </Provider>
        </div>
      </Layout>
    )
  });
};
export default EASY_ENV_IS_NODE ?  serverRender : clientRender();