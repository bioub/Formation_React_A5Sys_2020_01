import { combineReducers } from "redux";
import { INCREMENT_COUNTER, UPDATE_PRENOM } from "./constants";

const initialState = {
  counters: {
    1234: 10
  },
  selectedPrenom: "Paul"
};

function countersReducer(previousState = initialState.counters, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...previousState,
        [action.meta.id]: (previousState[action.meta.id] || 0) + action.payload
      };
    default:
      return previousState;
  }
}

function selectedPrenomReducer(
  previousState = initialState.selectedPrenom,
  action
) {
  switch (action.type) {
    case UPDATE_PRENOM:
      return action.payload;
    default:
      return previousState;
  }
}

export const rootReducer = combineReducers({
  counters: countersReducer,
  selectedPrenom: selectedPrenomReducer
});
