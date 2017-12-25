module.exports = function() {
  this.cacheable();
  return `
    import React, { Component } from 'react';
    import Layout from 'framework/layout/layout.jsx';
    import Header from 'component/header/header.jsx';
    import App from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    export default class Page extends Component {
      render() {
        return <Layout {...this.props}><App {...this.props} /></Layout>;
      }
    }
  `;
};
