import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { usersReducer } from './users/reducers';

/*
{
  users: {
    form: {
      username: '',
      email: '',
    },
    data: {
      loading: true,
      lastRequested: new Date(),
      items: [

      ]
    }
  }
}
*/

export function configureStore() {
  const rootReducer = combineReducers({
    users: usersReducer,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        reduxThunk
      )
    )
  );

  return store;
}