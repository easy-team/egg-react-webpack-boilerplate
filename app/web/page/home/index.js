import App from 'framework/app'
import Entry from './view/main'
import createStore from './store';
import createRouter from './router'
import '../../asset/css/blog.css'
import './index.css';

export default new App({
  Entry,
  createRouter,
  createStore
}).bootstrap();
