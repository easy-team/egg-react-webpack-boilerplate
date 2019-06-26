import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../widget/loading';

const AsyncImageLoadableComponent = Loadable({
  loader: () => import('../widget/async-image'),
  loading: Loading,
});

export default class About extends Component {

  render() {
    return <div>
      <h3 className="spa-title">Egg + React + Redux + React Router SPA Server Side + Webpack Render Example</h3>
      <div style={{ 'text-align': 'center' }}><AsyncImageLoadableComponent /></div>
    </div>;
  }
}
