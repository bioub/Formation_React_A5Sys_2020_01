import { USERS_FETCH_REQUESTED, USERS_FETCH_SUCCESS, USERS_FETCH_ERROR } from "./constants";

export function userFetch() {
  return function(dispatch) {
    dispatch(usersFetchRequested());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch(usersFetchSuccess(data)))
      .catch((err) => dispatch(usersFetchError(err)));
  }
}

export function usersFetchRequested() {
  return {
    type: USERS_FETCH_REQUESTED,
  };
}

export function usersFetchSuccess(payload) {
  return {
    type: USERS_FETCH_SUCCESS,
    payload,
  };
}

export function usersFetchError(payload) {
  return {
    type: USERS_FETCH_ERROR,
    payload,
    error: true,
  };
}