import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // we use  check and manipulate the localStorage to save the login:

  // const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  // if (storedUserLoggedInInformation === 1) {
  //   setIsLoggedIn(true);
  // }

  //  but if we run this check here, we would create an infinite loop,
  //  start - change state - start - change state - start

  // we will use useEffect instead!
  // two arguments: the function and an array of dependencies
  // the function runs one time, and it run again only if the dependencies changes!
  // we have no dependencies in this case, so the function runs just one time, when starting
  // this is the behavior we are looking for, in this case.

  // we use localStorage
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    //we store the logged in info in local storage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0 ");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
