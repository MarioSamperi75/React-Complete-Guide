// A built in Wrapper class:

// <>,  or React.Fragment
// or just Fragment
// if you import like this
// import React, { useState, Fragment } from "react";

import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersLists) => {
      return [
        ...prevUsersLists,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
