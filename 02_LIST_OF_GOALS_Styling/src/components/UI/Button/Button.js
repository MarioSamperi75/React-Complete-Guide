import React from "react";

// new way of importing css to use CSS modules
// you have also to rename the css file to Button.module.css
// in this way the css file is scoped to the component
// and we have not to change the CSS file
// we can continue to have it as a separate file

// we can set the media queries in the CSS as usual
import styles from "./Button.module.css";

// the class becomes an object
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
