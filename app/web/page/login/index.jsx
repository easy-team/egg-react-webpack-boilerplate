import React, { Component } from 'react';
import './index.css';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <div>
      <div className="login">
        <div>
          <h1>welcome <a href="/">easy-admin</a>!</h1>
        </div>
      </div>
    </div>;
  }
}