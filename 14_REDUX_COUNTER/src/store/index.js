//import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//ONE STATE but different slices of our state
// no need to write the action type. The toolkit recognizes the name automatically
// no need to use if statements. It's also automatic.
// we does't need to write the whole object. The toolkit overwrites automatically
// you change just the state you need!
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //use exactly 'payload' to get the arguments from the component
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// connecting the store with the Redux toolkit reducer
// const store = createStore(counterSlice.reducer);

// if you have many reducer (counterSlice, somethingElseSlice)
// you can use configureStore and pass an object

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// counterSlice.actions gives us all the action as methods
// good idea to export it, you can call the methods from the component!
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
