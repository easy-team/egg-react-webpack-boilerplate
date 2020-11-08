import React, { Component } from 'react';
import './top.css';
export default class Header extends Component {
  
  state = {
    collapsed: false
  }

  menuToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return <div>
      <nav className="easy-menu easy-menu-default easy-menu-custom easy-menu-fixed-top">
        <div className="easy-menu-menu-fluid">
          <div className="easy-menu-header page-scroll">
            <div className={ this.state.collapsed ? 'easy-menu-toggle collapsed' : 'easy-menu-toggle' } onClick={this.menuToggle}>
              <span className="easy-menu-toggle">Toggle navigation</span>
              <span className="easy-icon-line"></span>
              <span className="easy-icon-line"></span>
              <span className="easy-icon-line"></span>
            </div>
            <a className="easy-menu-brand" href="/">Egg + React</a>
          </div>
          <div className="collapse easy-menu-collapse" className={ this.state.collapsed ? 'collapse easy-menu-collapse collapse in' : 'collapse easy-menu-collapse' } id="bs-example-easy-menu-collapse-1">
            <ul className="nav easy-menu-nav easy-menu-right">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/intro">QuickStart</a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/easy-team">GitHub</a>
              </li>
              <li>
                <a target="_blank" href="https://yuque.com/easy-team">Document</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>;
  }
}
