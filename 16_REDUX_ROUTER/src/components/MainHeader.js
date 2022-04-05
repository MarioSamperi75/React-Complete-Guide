import { Link } from "react-router-dom";

// The Link component allows to prevent the reloading of the page
// reloading should mean losing all the states...

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        Li
      </nav>
    </header>
  );
};

export default MainHeader;
