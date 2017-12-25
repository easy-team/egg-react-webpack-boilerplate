
import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './hello.jsx';

if (typeof window === 'object') {
  const state = window.__INITIAL_STATE__;
  render(<Hello {...state} />, document.getElementById('app'));
} else {
  module.exports = Hello;
}
