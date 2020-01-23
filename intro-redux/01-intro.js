const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';

function rootReducer(previousState = { count: 0 }, {type, payload = 1}) {
  switch (type) {
    case INCREMENT:
      return {
        ...previousState,
        count: previousState.count + payload
      };
    case "DECREMENT":
      return {
        ...previousState,
        count: previousState.count - payload
      };
  }

  return previousState;
}

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

function increment(payload = 1) {
  return { type: INCREMENT, payload };
}

store.dispatch(increment(10));
store.dispatch(increment());
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "UNKNOWN" });
