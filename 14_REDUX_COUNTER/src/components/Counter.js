// USING REDUX DATA

// 1) import useSelector
// 2) use useSelector, select the state you need in the function(the function is the argument)
//    and assign useSelector to  variable
// 3) fetch data just providing the variable

import React from "react";
import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
