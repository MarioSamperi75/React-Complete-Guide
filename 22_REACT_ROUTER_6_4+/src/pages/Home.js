// the a element will refresh the page. No good!

import { Link } from "react-router-dom";

// the link element will not refresh the page
const Homepage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        <a href="/products">Go To Product Old Style</a>
      </p>
      <p>
        <Link to="/products">Go To Product with Link</Link>
      </p>
    </>
  );
};

export default Homepage;
