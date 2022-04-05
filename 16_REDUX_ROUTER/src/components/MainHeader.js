import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

// The NavLink component allows to prevent the reloading of the page
// AND har en activeClassName attribute that handles atomatically
// the highlighting of the active link
// you have just to provide the class with the style that you prefer

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
