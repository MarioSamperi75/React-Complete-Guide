import { Link, Outlet } from "react-router-dom";

// React router v6 assumes that you are starting with the parent route
// no need to write it, just the nested route!
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
