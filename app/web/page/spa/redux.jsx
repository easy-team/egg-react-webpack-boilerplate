import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import Header from 'component/header/header.jsx';
import App from 'component/spa/redux/app';
import store from 'component/spa/redux/store';
import './spa.css';


// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(createHistory(), store);
ReactDOM.render(
  <div>
    <Header></Header>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('app')
);