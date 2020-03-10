import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
 
import inlineTest from 'raw-loader!../inline.js';

export default class Layout extends Component {
  
  render() {
    const { locale, i18n } = this.props;
    console.log('>>>locale', locale);
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
          <script src="/public/lib/react-core-lib-1.0.0.min.js"></script>
          <script dangerouslySetInnerHTML={{__html: inlineCode }}></script>
          <script dangerouslySetInnerHTML={{__html: inlineTest }}></script>
          <script>inlineFileTest();inlineCodeTest();</script>
        </head>
        <body><div id="app"><IntlProvider locale={locale} messages={i18n}>{this.props.children}</IntlProvider></div></body>
      </html>;
    }
    return <IntlProvider locale={locale} messages={i18n}>{this.props.children}</IntlProvider>
  }
}