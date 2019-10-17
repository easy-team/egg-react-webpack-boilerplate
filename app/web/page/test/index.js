import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../../component/header/header.jsx';

const render = () => {
  ReactDOM.render(
    <div>
      <Header></Header>
      <h1>Res Webpack Multile Page Test</h1>
    </div>,
    document.getElementById('app')
  );
}

if (EASY_ENV_IS_DEV) {
  module.hot.accept();
}
render();