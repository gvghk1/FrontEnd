import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartLogic from "./components/Cart/CartLogic";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(CartLogic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
