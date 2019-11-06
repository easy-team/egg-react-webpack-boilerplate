import React, { Component } from 'react';
import Layout from '../../component/layout.jsx';
import List from './componets/list';
import './index.css';


const Entry = (props) => {
  return <Layout>
    <div className="main">
      <div className="page-container page-component">
        <h1>{props.message}</h1>
      </div>
    </div>
  </Layout>;
};


const clientRender = () => {
  const state = create(window.__INITIAL_STATE__);
  const render = Page =>{
    ReactDOM.hydrate(EASY_ENV_IS_DEV ? <AppContainer><Page {...state} /></AppContainer> : <Page />, document.getElementById('app'));
  };
  if (EASY_ENV_IS_DEV && module.hot) {
    module.hot.accept();
  }
  render(Entry);
};

const serverRender = ()=> {
  return context => {
    return Promise.resolve( () => {
      return <Entry {...context.state} />
    });
  }
};
export default EASY_ENV_IS_NODE ?  serverRender() : clientRender();