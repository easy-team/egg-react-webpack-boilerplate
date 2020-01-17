
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Hello extends Component {
  render() {
    return <h1>123456</h1>
  }
}
const root = document.getElementById('app');
ReactDom.render(<Hello />, root);
