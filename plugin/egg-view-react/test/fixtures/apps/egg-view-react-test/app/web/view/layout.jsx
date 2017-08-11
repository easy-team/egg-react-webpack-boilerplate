import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return <html>
    <head>
      <meta charSet="utf-8"></meta>
      <title>{this.props.title}</title>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
      <meta name="keywords" content={this.props.keywords}></meta>
      <meta name="description" content={this.props.description}></meta>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
    </head>
    <body><div id="app"></div></body>
    </html>;
  }
}