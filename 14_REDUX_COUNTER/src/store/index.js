//import { createStore } from "redux";
import authSlice from "./auth";
import counterSlice from "./counter";

import { configureStore } from "@reduxjs/toolkit";

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

export default store;
