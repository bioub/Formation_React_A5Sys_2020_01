import { INCREMENT_COUNTER, UPDATE_PRENOM } from "./constants";

// Flux Standard Action : FSA
// https://github.com/redux-utilities/redux-actions
// https://redux-toolkit.js.org/api/createAction

export function incrementCounter(id, payload = 1) {
  return {
    type: INCREMENT_COUNTER,
    payload,
    meta: {
      id,
    }
  };
}

export function updatePrenom(payload) {
  return {
    type: UPDATE_PRENOM,
    payload,
  };
}