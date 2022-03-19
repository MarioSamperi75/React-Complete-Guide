import { Component } from "react";
import classes from "./User.module.css";

// how to convert a functional component to a class component:
// total compatible with functional components

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
