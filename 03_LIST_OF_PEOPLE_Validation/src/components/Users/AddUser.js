// Ref as alternative to the state to get the input.
// Updating the state for every keystroke is not efficient
// ref allows to access the current object for every element
// the current object has a "value" that you can get!!!

// Steps:
// 1) import the hook useRef
// 2) assign the hook to a variable
// 3) use the "ref" props in the element you want to refer to
// 3) ref will have the hook variale as value
// 4) get the value from the current object

// we get rid of states, change handlers, onChange and value props

// 1) import the hook useRef
import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // 2) assign the hook to a variable
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    //to prevent the reloading of the page on submit
    event.preventDefault();

    //4) get the value from the current object
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    //basic validation logic
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    // we have not anymore the possibility to reset the state
    // but we can reset the current.value
    // in general is not a good practice to manipulate directly the DOM
    // react should do it for us
    // but in this case it´s not so much, just the user input
    // otherwise, we need to use states
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // on click to div or button, to remove the modal
  const errorHandler = () => {
    setError(null);
  };

  // type is actually a props that we create.
  // Button is our Component, it has not default attributes
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
