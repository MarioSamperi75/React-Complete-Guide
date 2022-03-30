// PROVIDING THE STORE -REDUX-
//1) import the provider
//2) wrap what you need -maybe the entire app- with the provider
//3) import the store
//4) add the store to the provider as props

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
