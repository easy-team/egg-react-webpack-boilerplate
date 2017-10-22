import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from 'component/layout/standard/header/header.jsx';


class App extends Component {
  render() {
    return (
      <div><Header></Header>Hello World</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


