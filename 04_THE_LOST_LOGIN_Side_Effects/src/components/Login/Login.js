// useEffect summary

import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //Without dependencies : it runs always
  // when the component mounts and for every state update
  useEffect(() => {
    console.log("EFFECT RUNNING without dependencies");
  });

  //With an empty array :
  // it runs just when the component mounts
  useEffect(() => {
    console.log("EFFECT RUNNING empty array");
  }, []);

  //enteredPassword as dependency :
  // it runs when the component mounts and whenever password changes
  useEffect(() => {
    console.log("EFFECT RUNNING dependency=password ");
  }, [enteredPassword]);

  // not at the beginning!
  // Cleanup - enteredPassword as dependency :
  // it runs efter password changes when the previous input form is unmounted
  // (before the new input form is mounted)
  useEffect(() => {
    return () => {
      return console.log("CLEANUP - dep=password");
    };
  }, [enteredPassword]);

  // Cleanup - empty array:
  // not at the beginning!
  // it runs efter password changes when the previous input form is unmounted
  // (when we log in e.g.)
  useEffect(() => {
    return () => {
      return console.log("CLEANUP - empty array");
    };
  }, []);

  useEffect(() => {
    const currentTimeout = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      clearTimeout(currentTimeout);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
