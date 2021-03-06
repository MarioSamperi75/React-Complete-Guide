import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//ONE STATE but different slices of our state
// no need to write the action type. The toolkit recognizes the name automatically
// no need to use if statements. It's also automatic.
// we does't need to write the whole object. The toolkit overwrites automatically
// you change just the state you need!

// I SPLITTED THE STORE IN MANY SLICE FILES, better for big apps
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

export const counterAction = counterSlice.actions;
export default counterSlice;
