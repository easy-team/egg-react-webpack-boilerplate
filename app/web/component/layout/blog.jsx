import React, { Component } from 'react';
import Layout from './default';
export default class Blog extends Component {
  render() {
    return <Layout>{this.props.children}</Layout>
  }
}