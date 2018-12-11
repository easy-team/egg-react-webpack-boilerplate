import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import './header.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return <header className="header">
      <div className="container"><h1>
        <a href="/" className="router-link-active">
          Egg+React
        </a></h1>
      <ul className="nav">
        <li className="nav-item">
          <a href="/">
            <FormattedMessage id='Server-Render' defaultMessage='Server-Render'/>
          </a>
        </li>
        <li className="nav-item">
          <a href="/client">
            <FormattedMessage id='Client-Render' defaultMessage='Client-Render'/>
          </a>
        </li>
        <li className="nav-item">
          <a href="/ant/tab">
            <FormattedMessage id='Ant-Design' defaultMessage='Ant-Design'/>
          </a>
        </li>
      </ul>
      </div>
    </header>;
  }
}
