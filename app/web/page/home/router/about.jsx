// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export default class About extends Component {

  render() {
    const styleTitle = {
      marginTop: '40px', marginBottom: '40px', textAlign: 'center'
    };
    const styleSub = {
      marginBottom: '40px', textAlign: 'center', color: '444444'
    };
    return <div>
      <h2 style={{...styleTitle}}>Egg React Server Side Render</h2>
      <h4 style={{...styleSub}}><a href="https://github.com/easy-team/egg-react">https://github.com/easy-team/egg-react</a></h4>
      <h4 style={{...styleSub}}><a href="https://yuque.com/easy-team/egg-react">https://yuque.com/easy-team/egg-react</a></h4>
      <h4 style={{...styleSub}}><a href="https://easy-team.gitee.io/egg-react">https://easy-team.gitee.io/egg-react</a></h4>
      <h4 style={{...styleSub}}><a href="https://github.com/hubcarl">https://github.com/hubcarl</a></h4>
    </div>;
  }
}
