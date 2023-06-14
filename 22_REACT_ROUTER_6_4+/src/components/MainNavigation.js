import { NavLink } from "react-router-dom";
import classes from "./MainNavigaton.module.css";

const MainNavigation = () => {
  const activeClass = ({ isActive }) => (isActive ? classes.active : undefined);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={activeClass}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
