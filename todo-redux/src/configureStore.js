import { createStore, combineReducers } from 'redux';
import { todosReducer } from './todos/reducers';

export function configureStore() {
  const rootReducer = combineReducers({
    todos: todosReducer,
  });

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}