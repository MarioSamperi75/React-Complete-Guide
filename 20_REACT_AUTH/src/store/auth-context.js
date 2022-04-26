import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// we store the token in local storage when logging in
// and we delete it when logging out
// and when initializing the token state
// we will have a look to the local storage

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  //!! convert a trusy/falsy statement in a boolean true/false
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    // if you want to store objects you need to convert to JSON
    // in this case it's just a string
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
