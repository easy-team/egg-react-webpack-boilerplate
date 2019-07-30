import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from '../../component/header/header.jsx';
import App from './route';
import store from './store';

const render = () => {
  ReactDOM.render(
    <div>
      <Header></Header>
      <Provider store={store}>
        <App url = { store.getState().url } />
      </Provider>
    </div>,
    document.getElementById('app')
  );
}

if (EASY_ENV_IS_DEV) {
  module.hot.accept();
  // fix dev mode, page flicker
  setTimeout(render, 100);
} else {
  render();
}

