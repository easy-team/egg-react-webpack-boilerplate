// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export default class AssetRender extends Component {

  render() {
    const { title } = this.props;
    return <div>
      <h1><a href="https://www.yuque.com/easy-team/egg-react/asset">{title}</a></h1>
      <div>
        <iframe src="https://www.yuque.com/easy-team/egg-react/asset" frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
      </div>
    </div>;
  }
}
