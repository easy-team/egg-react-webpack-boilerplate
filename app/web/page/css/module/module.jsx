import React, { Component } from 'react';
import Header from 'component/layout/standard/header/header.jsx';
import style from './module.css';
export default class Module extends Component {
  render() {
    return <div>
      <Header></Header>
      <div className={style.message}>{this.props.message.text}</div>
    </div>;
  }
}