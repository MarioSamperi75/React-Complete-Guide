import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  //instead of three states, just one as an object
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  // even if you want to change just a key,
  // you must update all the keys => spread operator and overriding!
  // if not the other ones just disappear :(
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    console.log(userInput.enteredTitle);
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    console.log(userInput.enteredAmount);
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
    console.log(userInput.enteredDate);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2021-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
