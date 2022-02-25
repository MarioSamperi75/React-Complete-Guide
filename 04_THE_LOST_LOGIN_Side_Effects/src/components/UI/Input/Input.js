// we create a ref to input
// and a method that allows to set the focus via ref
// but we cant pass ref as props!
// to get ref accessible from outside (Login e.g.)
//1) import useImperativeHandle
//2) pass ref as Input argument after props
//3) create uuseImperativeHandle function
//4) wrap your component with React.forwardRef
//5) Go to Login create references and call focus (see Login)

//1)
import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";
//2) , 4)
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };
  //3)
  // arguments: ref and a function returning the data you will use from outside
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="{props.id}">{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
