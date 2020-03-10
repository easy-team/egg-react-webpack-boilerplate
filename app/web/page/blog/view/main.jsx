import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { hot } from 'react-hot-loader/root'
import { ARTICLE_LIST, ARTICLE_DETAIL } from '../store/constant';
import Layout from '../../../component/layout'
import Header from '../../../component/header'
import Route from '../router/route';
import Home from '../router/home';
import Detail from '../router/detail';
import Example from '../router/example';
import Async from '../router/async';
import About from '../router/about';
import './main.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { current: props.url };
  }

  tabClick(e) {
    console.log('click', e.target);
  }

  render() {
    const { locale, i18n } = this.props;
    return <Layout {...this.props}>
        <Header></Header>
        <ul className="menu-tab">
          <li onClick={this.tabClick.bind(this)}><Link to="/"><FormattedMessage id='tab.list' /></Link></li>
          <li onClick={this.tabClick.bind(this)}><Link to="/async"><FormattedMessage id='tab.async' /></Link></li>
          <li onClick={this.tabClick.bind(this)}><Link to="/example"><FormattedMessage id='tab.example' /></Link></li>
          <li onClick={this.tabClick.bind(this)}><Link to="/about"><FormattedMessage id='tab.about' /></Link></li>
        </ul>
        <Switch>
          <Route type={ARTICLE_DETAIL} path="/detail/:id" component={Detail} />
          <Route path="/example" component={Example}/>
          <Route path="/async" component={Async}/>
          <Route path="/about" component={About}/>
          <Route type={ARTICLE_LIST} path="/" component={Home}/>
        </Switch>
    </Layout>;
  }
}


const mapStateToProps = state => {
  return {
    locale: state.locale,
    i18n: state.i18n
  };
};


export default connect(mapStateToProps)(EASY_ENV_IS_DEV ? hot(Main) : Main);
