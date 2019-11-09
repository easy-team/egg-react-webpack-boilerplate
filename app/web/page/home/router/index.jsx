import Home from './home';
import Async from './async';
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
      path: '/',
      component: Home
    },
    {
      path: '/async',
      component: Async
    },
    {
      path: '/about',
      component: Async
    },
    {
      path: '*',
      component: Home
    }
  ];  
}
