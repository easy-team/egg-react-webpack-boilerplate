import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return <header className="header">
      <div className="container"><h1>
        <a href="/" className="router-link-active">Egg+React</a></h1>
      <ul className="nav">
        <li className="nav-item"><a href="/client">SPA-CSR</a></li>
        <li className="nav-item"><a href="/redux">SPA-CSR-REDUX</a></li>
        <li className="nav-item"><a href="/ssr">SPA-SSR-REDUX</a></li>
      </ul>
      </div>
    </header>;
  }
}
