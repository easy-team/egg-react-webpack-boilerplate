import { hot } from 'react-hot-loader/root' 
import App from 'framework/app'
import createStore from './store'
import createRouter from './router'
import Main from './view/main'
import '../../asset/css/blog.css'
import './index.css';

const Entry = EASY_ENV_IS_DEV ? hot(Main) : Main;

export default new App({
  Entry,
  createRouter,
  createStore
}).bootstrap();
