import { USERS_FETCH_REQUESTED, USERS_FETCH_SUCCESS } from "./constants";
import { combineReducers } from "redux";

const initialState = {
  data: {
    loading: false,
    // lastRequested: null,
    items: [],
  }
}

export function dataReducer(state = initialState.data, action) {
  switch (action.type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    // case USERS_FETCH_ERROR:
    //   return {
    //     ...state,
    //     items: [],
    //     loading: false,
    //     error: action.payload.message,
    //   }
    default:
      return state;
  }
}

export const usersReducer = combineReducers({
  data: dataReducer,
});