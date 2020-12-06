import React, { Component } from 'react';
import inlineTest from 'raw-loader!../inline.js';
export default class Layout extends Component {
  
  render() {
    const inlineCode = `
      function inlineCodeTest() {
        console.log('Egg React inline Code javascript');
        var name = 'Egg React';
        var title = 'Server Side Render';
        return name + '-' + title;
      }
    `;
    if(EASY_ENV_IS_NODE) {
      return <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
          <meta name="keywords" content={this.props.keywords}></meta>
          <meta name="description" content={this.props.description}></meta>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
          <script dangerouslySetInnerHTML={{__html: inlineCode }}></script>
          <script dangerouslySetInnerHTML={{__html: inlineTest }}></script>
          <script>inlineFileTest();inlineCodeTest();</script>
        </head>
        <body><div id="app">{this.props.children}</div></body>
      </html>;
    }
    return this.props.children;
  }
}