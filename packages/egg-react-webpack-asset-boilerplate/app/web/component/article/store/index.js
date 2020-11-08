import { createStore } from 'redux';
import reducers from './reducers';

export const create = initalState => {
  return createStore(reducers, initalState);
};
