import React from "react";

import "./App.css";

import Explore from "./Components/Explore";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SoundBank from "./Components/SoundBank";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllCategories from "./Components/DetailedPages/AllCategories";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/explore" exact>
          {" "}
          <Explore />{" "}
        </Route>
        <Route path="/login" exact>
          {" "}
          <Login />{" "}
        </Route>
        <Route path="/soundbank" exact>
          {" "}
          <SoundBank />
        </Route>
        <Route path="/register" exact>
          {" "}
          <Register />{" "}
        </Route>
        <Route path="/more" exact>
          <AllCategories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
