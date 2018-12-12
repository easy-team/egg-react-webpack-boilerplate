module.exports = function () {
  this.cacheable();
  return `
  import React, { Component } from 'react';
  import Layout from 'framework/layout/layout.jsx';
  import {IntlProvider, addLocaleData} from "react-intl";
  import en from "react-intl/locale-data/en";
  import es from "react-intl/locale-data/es";
  import localeData from "asset/i18n/localeData.json";
  import App from '${this.resourcePath.replace(/\\/g, '\\\\')}';
  export default class Page extends Component {
    render() {
      const locale = this.props.locale || 'en';
      const messages =  localeData[locale];
      addLocaleData([...en, ...es]);
      return <IntlProvider locale={locale} messages={messages}><Layout {...this.props}><App {...this.props} /></Layout></IntlProvider>;
    }
  }
`;
};
