import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  // a state checks if the input is not empty
  const [isValid, setIsValid] = useState(true);

  //the trimmed lenght of the entered text modifies the value of isValid
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  //the trimmed lenght of the entered text modifies the value of isValid
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  //ternary option to create dinamically the name of the class
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
