import { LIST,ADD, DEL } from './constant'

export function add(item) {
  console.log('item', item);
  return {
    type: ADD,
    item
  }
}

export function del(id) {
  return {
    type: DEL,
    id
  }
}
