import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from './component/loading';
import Layout from 'component/layout/blog';
import Header from 'component/header'

const AsyncImageLoadableComponent = Loadable({
  loader: () => import('./component/async-image'),
  loading: Loading
});

export default class Async extends Component {

  render() {
    return <Layout>
      <Header></Header>
      <h2 style={{ marginTop: '40px', marginBottom: '40px', textAlign: "center"}}>Egg React Server Side Render</h2>
      <h4 style={{marginBottom: '40px', textAlign: "center", color: 'lightgray'}}>Egg + React + Redux + React Router SPA Server Side + Webpack Render Example</h4>
      <div style={{ textAlign: 'center' }}><AsyncImageLoadableComponent /></div>
    </Layout>;
  }
}
