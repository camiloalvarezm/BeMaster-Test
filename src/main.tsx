import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BeMasterApp from "./BeMasterApp";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BeMasterApp />
    </Provider>
  </React.StrictMode>
);
