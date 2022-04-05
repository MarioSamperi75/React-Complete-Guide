import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

// The Link component allows to prevent the reloading of the page
// reloading should mean losing all the states...

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
