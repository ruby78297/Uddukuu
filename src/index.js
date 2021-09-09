import React from "react";
import { Dropdown } from "bootstrap";
import ReactDOM from "react-dom";
// import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
