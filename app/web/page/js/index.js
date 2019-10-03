import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Layout from '../../component/layout.jsx';
import List from './componets/list';
import './index.css';

class ListPage extends Component {
  render() {
    return <div className="main">
        <div className="page-container page-component">
          <List list={this.props.list}></List>
        </div>
      </div>
  }
}

class ServerEntry extends Component {
  render() {
    return <Layout><ListPage {...this.props} /></Layout>;
  }
}

const clientEntry = () => {
  const root = document.getElementById('app');
  const state = window.__INITIAL_STATE__ || {};
  const render = () =>{
    ReactDOM.hydrate(EASY_ENV_IS_DEV ? <AppContainer><ListPage {...state}/></AppContainer> : <ListPage />, root);
  };
  if (EASY_ENV_IS_DEV && module.hot) {
    module.hot.accept();
  }
  render();
};

export default EASY_ENV_IS_NODE ? ServerEntry : clientEntry();