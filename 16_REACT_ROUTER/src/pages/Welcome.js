import { Route } from "react-router-dom";

// we can have a route in a route (nested route)
// that allows to show additonal code IF the path is more specific
// not just /welcome but /welcome/new-user in this case
// but you must use the exact complete path (with /welcome)

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
