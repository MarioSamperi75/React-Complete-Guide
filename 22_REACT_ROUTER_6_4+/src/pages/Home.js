// the a element will refresh the page. No good!

import { Link, useNavigate } from "react-router-dom";

// the link element will not refresh the page
const Homepage = () => {
  const navigate = useNavigate();

  const navigateProgrammatically = () => {
    navigate("products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        <a href="/products">Go To Product Old Style</a>
      </p>
      <p>
        <Link to="/products">Go To Product with Link</Link>
      </p>
      <button onClick={navigateProgrammatically}>
        Navigate Programmatically
      </button>
    </>
  );
};

export default Homepage;
