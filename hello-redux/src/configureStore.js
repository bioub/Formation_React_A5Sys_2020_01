import { createStore } from 'redux';

export function configureStore() {
  const rootReducer = (previousState = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return {
          ...previousState,
          count: previousState.count + 1,
        };
      default:
        return previousState;
    }
  };

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}