import { combineReducers } from 'redux';
import { UPDATE_TODOS_INPUT, ADD_TODO } from './constants';

const initialState = {
  inputValue: 'Acheter du pa',
  items: [
    {
      id: 1234,
      title: 'TEST',
      completed: false,
    },
    {
      id: 4567,
      title: 'Autre',
      completed: true,
    },
  ],
};

export function inputValueReducer(
  previousState = initialState.inputValue,
  action,
) {
  switch (action.type) {
    case UPDATE_TODOS_INPUT:
      return action.payload;
    default:
      return previousState;
  }
}

export function itemsReducer(previousState = initialState.items, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...previousState, action.payload];
    default:
      return previousState;
  }
}

export const todosReducer = combineReducers({
  inputValue: inputValueReducer,
  items: itemsReducer,
});
