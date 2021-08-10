import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Explore from "../Explore";
import Login from "../Login";
import Tracks from "../Tracks";
import NewTrack from "../NewTracks";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner-item">
      <Router>
        <Navbar />
        {/* using switch to go to links from nav bar */}
        <Switch>
          <Route path="/explore" component={Explore}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/tracks" component={Tracks}></Route>
          <Route path="/newtrack" component={NewTrack}></Route>
        </Switch>
      </Router>
      <SearchBar></SearchBar>
    </div>
  );
};
export default Banner;
