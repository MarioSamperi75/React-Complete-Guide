const redux = require("redux");

// *********REDUCER**************
// arguments: existring state and action
// the state must be initialized
// if states define the different actions
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  // default return: the reducer must replace the existing state with a new state.
  // (but you can set the existing state as 'new' state)
  return state;
};

// one store '
// the argumet is the reducer function
const store = redux.createStore(counterReducer);

//-------------------------------

// the subscriber fuction get access to the store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// to implement the subscriber function you have to pass it to store.subscribe
store.subscribe(counterSubscriber);

// When we run the code, the store will be initialized and will execute its default updating
// but to use the subscriber you have to dispatch an action
// redux will try to find the corresponding type in the reducer
// otherwise it will run the default again
// but now from the subcriber, now with a console.log

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
