import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PageLogic from "./components/Cart/PageLogic";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(PageLogic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
