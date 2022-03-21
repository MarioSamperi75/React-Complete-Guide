import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // define ONE state (this.state) in the constructor AS AN OBJECT

  constructor() {
    super();
    this.state = {
      showUsers: true,
      // moreStates : "something",
      // nestedStates : {one: 1, two: 2},
      // arrayState: [array]
    };
  }

  // if an error is generated inside a user component (JSX)
  // we can't use try catch, but we have to build and use an error boundary
  // error boundary must be a class component
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; NEVER!!!
    // use function setState!

    this.setState((curState) => {
      // that will be merged with the old state
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    //you need to bind the method to the class, to allow the first this to work properly
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
