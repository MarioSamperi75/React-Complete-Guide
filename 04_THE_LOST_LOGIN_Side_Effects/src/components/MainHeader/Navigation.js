// an easier way to consume then context : useContext hook!
// 1) import useContext
// 2) declare the variable and assign the specific context
// 3) use it your variable (ctx) where you want!

//  we initited the context provider with isLoggedIn and onLogout

// 1)
import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  //2)
  const ctx = useContext(AuthContext);
  //3)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
