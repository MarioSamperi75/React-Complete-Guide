import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //We are using a hooks, useState.
  //It needs a default value(argument). This value is read just the first time we mount the component
  //If we mount the component again, the default becomes the last state
  // we destructure the name (title) and the function to change it(setTitle)

  const [title, setTitle] = useState(props.title);

  // we use setTitle in the function and title in the JSX(26).
  // In this way we are modifying the DOM "on Click"
  const clickHandler = () => {
    setTitle("Updated!!");
    console.log("Clicked!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
