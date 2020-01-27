import { createStore } from 'redux';
import reducers from './reducers';

export default function(initalState){
  return createStore(reducers, initalState);
}
