import React, { Component } from 'react';
import Layout from './default';
import Header from '../header';
export default class Blog extends Component {
  render() {
    return <Layout><Header></Header>{this.props.children}</Layout>
  }
}