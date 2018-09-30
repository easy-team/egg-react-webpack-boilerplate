import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Layout from '../../component/layout.jsx';
import List from './componets/list';
import './index.css';

class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <div>
      <div className="main">
        <div className="page-container page-component">
          <List list={this.props.list}></List>
        </div>
      </div>
    </div>;
  }
}

class ServerRender extends Component {
  render() {
    return <Layout {...this.props}><ListIndex {...this.props} /></Layout>;
  }
}

const ClientRender = () => {
  const state = window.__INITIAL_STATE__;
  const render = (App)=>{
    ReactDom.hydrate(EASY_ENV_IS_DEV ? <AppContainer><App {...state} /></AppContainer> : <App {...state} />, document.getElementById('app'));
  };

  if (EASY_ENV_IS_DEV && module.hot) {
    module.hot.accept();
    // module.hot.accept('/list', () => { render(ListIndex) });
  }
  render(ListIndex);
}

export default EASY_ENV_IS_NODE ?  <ServerRender /> : ClientRender();
