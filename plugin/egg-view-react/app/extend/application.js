'use strict';

const Engine = require('../../lib/engine');
const REACT_ENGINE = Symbol('Application#react');

module.exports = {

  get react() {
    if (!this[REACT_ENGINE]) {
      this[REACT_ENGINE] = new Engine(this);
    }
    return this[REACT_ENGINE];
  },
};
