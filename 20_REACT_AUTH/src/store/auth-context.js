import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
// automatic logout: when logging in we create a timeout funtion,
// that calls the logout when when the time expires
// we use an helper function to calculate the remainingTime
// and we pass the expirationTime as parameter from the AuthForm

const calculatingRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjustedExpirationTime - currentTime;

  return remainingDuration;
};

// we store the token in local storage when logging in
// and we delete it when logging out
// and when initializing the token state
// we will have a look to the local storage

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  //!! convert a trusy/falsy statement in a boolean true/false
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    // if you want to store objects you need to convert to JSON
    // in this case it's just a string
    localStorage.setItem("token", token);

    const remainingTime = calculatingRemainingTime(expirationTime);
    setTimeout(logoutHandler, remainingTime);
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
