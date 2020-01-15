'use strict';

import React, { Component } from 'react';
import Layout from 'component/layout/blog';
export default class Test extends Component {
  render() {
    return <Layout {...this.props}>
      <h2>{this.props.message}</h2>
    </Layout>
  }
}