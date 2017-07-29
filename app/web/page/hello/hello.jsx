import React, { Component } from 'react';
import Header from 'component/layout/standard/header/header.jsx';

export default class Hello extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }
  render() {
    return <div><Header></Header>{this.props.message.text}</div>;
  }
}