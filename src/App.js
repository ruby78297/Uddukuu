import React from "react";

import "./App.css";

import Explore from "./Components/Explore";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SoundBank from "./Components/SoundBank";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/explore" component={Explore}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/soundbank" component={SoundBank}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
