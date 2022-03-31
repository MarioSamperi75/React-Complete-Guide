// USING REDUX DATA

// 1) import useSelector
// 2) assign useSelector to a variable
//    and select the state you need in the function(the function is the argument)
// 3) fetch data just providing the variable

// DISPATCHING AN ACTION
// 1) import useDispatch
// 2) assign it to a variable (you will get the dispatch method)
// 3) Use the dispatch method where you need and provide the action you want

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // use the Redux toolkit methods
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  // you can pass data as argument in the redux-toolkit method
  // of course no need to hardcode the amount...
  const increaseHandler = () => {
    dispatch(counterAction.increase(5)); //{type: SOME_UNIQUE_IDENTIFIER , payload: 5}
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
