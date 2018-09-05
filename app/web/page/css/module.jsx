import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import style from './css.module.css';
import logo from '../../asset/images/loading.gif';
export default class Module extends Component {
  render() {
    return <div>
      <Header></Header>
      <div className={style.message}><img src={logo} /> <br />{this.props.message.text}</div>
    </div>;
  }
}