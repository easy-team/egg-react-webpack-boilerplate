import React, { Component } from 'react';
import Layout from './default';
export default class Blog extends Component {
  render() {
    return <Layout title={this.props.title}>{this.props.children}</Layout>
  }
}