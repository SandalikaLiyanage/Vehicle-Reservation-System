// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "@asgardeo/auth-react";
import { asgardeoConfig } from "./components/AuthConfig";

ReactDOM.render(
  <AuthProvider config={asgardeoConfig}>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
