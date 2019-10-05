import React, { Component } from 'react';
import Layout from '../../component/layout'
import './index.css';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Layout>
      <div className="login">
        <div>
          <h1>Welcome <a href="/">easy-admin</a>!</h1>
        </div>
      </div>
    </Layout>;
  }
}