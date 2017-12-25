import { ADD, DEL } from './constant';


export default function update(state, action) {
  const newState = Object.assign({}, state);
  if (action.type === ADD) {
    newState.list = [...newState.list, action.item];
  } else if (action.type === DEL) {
    newState.list = newState.list.filter(item => {
      return item.id !== action.id;
    });
  }
  return newState;
}
