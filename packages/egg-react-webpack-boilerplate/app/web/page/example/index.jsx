// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Layout from 'component/layout';

export default class Example extends Component {

  render() {
    const styleTitle = {
      marginTop: '40px', marginBottom: '40px', textAlign: 'center'
    };
    const styleSub = {
      marginBottom: '40px', textAlign: 'center', color: '444444'
    };
    return <Layout>
      <h2 style={{...styleTitle}}>Egg React Example</h2>
      <h4 style={{...styleSub}}><a target="_blank" href="/example/hook">React Hook Render</a></h4>
      <h4 style={{...styleSub}}><a target="_blank" href="/example/async">React Async Component Render</a></h4>
      <h4 style={{...styleSub}}><a target="_blank" href="/example/stateless">React Stateless Component Render</a></h4>
      <h4 style={{...styleSub}}><a target="_blank" href="/example/data/node">React Server Render for Node Data Mode</a></h4>
      <h4 style={{...styleSub}}><a target="_blank" href="/example/data/async">React Server Render for asyncData Mode</a></h4>
    </Layout>;
  }
}
