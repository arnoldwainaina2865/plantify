import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import Provider from "./context/Provider";
import { ReactNotifications } from "react-notifications-component";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReactNotifications />
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
