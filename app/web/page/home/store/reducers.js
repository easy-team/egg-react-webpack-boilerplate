import { LIST, ADD, DEL } from './constant';

export default function update(state, action) {
  const newState = Object.assign({}, state);
  if (action.type === ADD) {
    const list = Array.isArray(action.item) ? action.item : [action.item];
    newState.list = [...newState.list, ...list];
    console.log('-----', newState.list);
  } else if (action.type === DEL) {
    newState.list = newState.list.filter(item => {
      return item.id !== action.id;
    });
  } else if (action.type === LIST) {
    newState.list = action.list;
  }
  return newState;
}
