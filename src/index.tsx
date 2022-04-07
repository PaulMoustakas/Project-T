import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { DAppProvider } from "@usedapp/core";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
