import React from "react";
import classes from "./Button.module.css";

// you have to use props.children even if you want to pass just text!
// we receive type and onCLick as props,
// Button is our component has not default attributs
// if we did not add type, we get "button" ad default
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
