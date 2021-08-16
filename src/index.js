import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Explore from "./Components/Explore";

ReactDOM.render(
  <BrowserRouter>
    <App /> <Explore />
  </BrowserRouter>,

  document.getElementById("root")
);
