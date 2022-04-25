import React, { useState } from "react";

// just for better autocompletion
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// we create the methods to define the context object
// we create the context object
// we export the wrapper AuthContextProvidercomponent
// with the contextValue as props.value
export const AuthContextProvider = () => {
  const [token, setToken] = useState(null);

  //!! convert a trusy/falsy statement in a boolean true/false
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      props.children
    </AuthContext.Provider>
  );
};

export default AuthContext;
