import { createStore } from "redux";

// of course you should consider these states as local
// and use useState in the component instead of Redux
// But this is just a redux demo
const initialState = { counter: 0, showCounter: true };

// when working with moltiple properties
// you have always return the entire payload
// even if the other state don't change
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  // dinamisk reducer: you can get data from the action
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
