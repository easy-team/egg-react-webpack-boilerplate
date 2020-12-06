import { ARTICLE_DETAIL, ARTICLE_LIST, ADD, DEL } from './constant';

export default function update(state, action) {
  const newState = Object.assign({}, state);
  if (action.type === ADD) {
    const list = Array.isArray(action.data) ? action.data : [action.data];
    newState.list = [...newState.list, ...list];
  } else if (action.type === DEL) {
    newState.list = newState.list.filter(data => {
      return data.id !== action.id;
    });
  } else if (action.type === ARTICLE_LIST) {
    newState.list = action.data.list;
    newState.total = action.data.total;
  } else if (action.type === ARTICLE_DETAIL) {
    newState.article = action.data.article;
  }
  return newState;
}
