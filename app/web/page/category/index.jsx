'use strict';

import React, { Component } from 'react';
import Layout from '../../component/layout/default';

export default class Category extends Component {
  render() {
    return <Layout>
      <h2>{this.props.message}</h2>
    </Layout>
  }
}