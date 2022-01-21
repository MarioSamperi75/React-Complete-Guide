import React from "react";

import classes from "./Card.module.css";

// Card is a component that we created
// it has not default props
// if we want to use className as Card attribute (in AddUser.js)
// we need to send it here as props!
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
