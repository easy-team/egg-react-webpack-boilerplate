'use strict';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { update } from '../store/actions';

class WrapperRoute extends Component {

  async componentWillReceiveProps(nextProps) {
    const { type, locals, component, computedMatch, updateState } = nextProps;
    console.log('>>route', computedMatch.url, this.props.computedMatch.url);
    if (computedMatch.url !== this.props.computedMatch.url) {
      const { asyncData } = component;
      if (asyncData) {
        const data = await asyncData(locals, { match: computedMatch });
        console.log('>>>update', type, data);
        updateState(type, data);
      }
    }
  }

  render() {
    return <Route {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    locals: state
  }
};

const mapDispatchToProps = dispatch => {
  return { 
    updateState: (type, data) => dispatch(update(type, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrapperRoute);
