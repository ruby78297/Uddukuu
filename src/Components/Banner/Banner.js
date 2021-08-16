import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Explore from "../Explore";
import Login from "../Login";
import Register from "../Register";
import SoundBank from "../SoundBank";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner-item wrap">
      <Router>
        <Navbar />
        {/* using switch to go to links from nav bar */}
        <Switch>
          <Route path="/explore" component={Explore} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/soundbank" component={SoundBank} exact></Route>
          <Route path="/registration" component={Register} exact></Route>
        </Switch>
      </Router>
      <SearchBar></SearchBar>
    </div>
  );
};
export default Banner;
