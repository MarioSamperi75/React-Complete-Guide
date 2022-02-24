// How to use a context
// 1) create and export it
// 2) import it where needed
// 3) Provide it
// 4) Consume it

import React, { useState, useEffect } from "react";

// these default value are overrided by the values we set in the provider
// anyway, it's okey tho have them here too to get the autocompletion!
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

// we create a AuthContextProvider to outsource
// all the context logic from the components
// we wrap <App>  with the provider in index.js
// all the logic becomes available to the entire app
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
