import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../../component/header/header.jsx';

const render = () => {
  ReactDOM.render(
    <div>
      <Header></Header>
      <h1>Egg Webpack Multile Page Test</h1>
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