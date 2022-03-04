// we forward ref to use it in the Input custom element
import React from "react";
import classes from "./Input.module.css";

//we pass input as an object, and we spread all its properties
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
