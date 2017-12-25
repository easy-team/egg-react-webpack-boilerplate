import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      Links:{' '}
      <Link to="/spa">Home</Link>
      {' '}
      <Link to="/spa/foo">Foo</Link>
      {' '}
      <Link to="/spa/bar">Bar</Link>
    </header>
    {children}
  </div>
);

const Home = () => (<div>Home!</div>);
const Foo = () => (<div>Foo!</div>);
const Bar = () => (<div>Bar!</div>);

const routes = (
  <Route path="/spa" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/spa/foo" component={Foo}/>
    <Route path="/spa/bar" component={Bar}/>
  </Route>
);

export default routes;
