import { Route } from 'react-router-dom';
import Home from './home';
import Async from './async';
import Example from './example';
import Detail from './detail';
import About from './about';
const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      );
    }}/>
  );
};


export default function createRouter() {
  return [
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/async',
      component: Async
    },
    {
      path: '/example',
      component: Example
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: Home
    }
  ];  
}
