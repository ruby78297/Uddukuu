import React from "react";

import "./App.css";

import Explore from "./Components/Explore";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SoundBank from "./Components/SoundBank";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllCategories from "./Components/DetailedPages/AllCategories";
import Producers from "./Components/DetailedPages/Artists/Producers/Producers";
import Instrumentalists from "./Components/DetailedPages/Artists/Instrumentalists/Instrumentalists";
import MasterEngineers from "./Components/DetailedPages/Artists/MasterEngineers/MasterEngineers";
import Singers from "./Components/DetailedPages/Artists/Singers/Singers";
import MixingEngineers from "./Components/DetailedPages/Artists/MixingEngineers/MixingEngineers";
import Writer from "./Components/DetailedPages/Artists/SongWriters/Writer";
import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/explore" exact>
          {" "}
          <AllCategories />
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
        <Route path="/producers" exact>
          <Producers />
        </Route>
        <Route path="/inst" exact>
          <Instrumentalists />
        </Route>
        <Route path="/mastering-engineers" exact>
          <MasterEngineers />
        </Route>
        <Route path="/singers" exact>
          <Singers />
        </Route>
        <Route path="/mix-engg" exact>
          <MixingEngineers />
        </Route>
        <Route path="/writers" exact>
          <Writer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
