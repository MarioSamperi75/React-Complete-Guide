import { Route, Routes } from "react-router-dom";

// React router v6 assumes that you are starting with the parent route
// no need to write it, just the nested route!
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="/new-user" element={<p>Welcome, new user!</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
