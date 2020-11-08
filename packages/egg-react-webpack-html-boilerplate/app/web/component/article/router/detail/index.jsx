import React, { Component } from 'react';
import * as qs from 'querystring';

export default class Detail extends Component {
  render() {
    const { location } = this.props.history;
    const { title, url } = qs.parse(location.search.slice(1));
    return <div>
      <h1 className="detail-title">{title}</h1>
      <iframe src={url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
    </div>;
  }
}
