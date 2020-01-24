import { ADD_TODO, UPDATE_TODOS_INPUT } from './constants';

export function updateTodosInput(payload) {
  return {
    type: UPDATE_TODOS_INPUT,
    payload,
  };
}

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      title,
      completed: false,
    },
  };
}
