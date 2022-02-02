// How to use a context
// 1) create and export it
// 2) import it where needed
// 3) Provide it
// 4) Consume it

import React from "react";

const AuthContext = React.createContext({ isLoggedIn: false });

export default AuthContext;
