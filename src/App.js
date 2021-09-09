import React from "react";

import "./App.css";

import Explore from "./Components/Explore";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SoundBank from "./Components/Soundbank/SoundBank";
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
import CoverSignup from "../src/Components/Banner/SearchBar/Components/coverSignup";
import { UserDasboard } from "./Components/UserDasboard/UserDasboard";
import AllJobs from "./Components/UserDasboard/Components/AllJobs";
import Closed from "./Components/UserDasboard/Components/Closed";
import Archived from "./Components/UserDasboard/Components/Archived";
import Completed from "./Components/UserDasboard/Components/Completed";
import Payments from "./Components/UserDasboard/Components/Payments";
import Open from "./Components/UserDasboard/Components/Open";
import Favorites from "./Components/UserDasboard/Components/Favorites";
import Massage from "./Components/UserDasboard/Components/Massage";
import UserProfile from "./Components/UserDasboard/Components/UserProfile";
import Checkout from "./Components/Soundbank/asesst/Checkout/Checkout";

import SpDashboard from "./Components/SpDashboard/SpDashboard";
import MemberBenefits from "./Components/SpDashboard/Components/MemberBenefits";
import SpPayment from "./Components/SpDashboard/Components/SpPayment/SpPayment";
import PaymentRequest from "./Components/SpDashboard/Components/SpPayment/PaymentRequest";
import SpProfile from "./Components/SpDashboard/Components/SpProfile";
import EditSpProfile from "./Components/SpDashboard/Components/EditSpProfile/EditSpProfile";
import EditProfile from "./Components/SpDashboard/Components/EditProfile/EditProfile";
import Bbutton from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      <Switch>
        {window.scrollTo(0, 0)}
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
        {/* <Route path="/user" exact>
          <UserDasboard />
        </Route> */}
        <Route path="/user/alljobs" exact>
          <AllJobs />
        </Route>
        <Route path="/user/open" exact>
          <Open />
        </Route>
        <Route path="/user/payment" exact>
          <Payments />
        </Route>
        <Route path="/user/active" exact>
          <UserDasboard />
        </Route>
        <Route path="/user/completed" exact>
          <Completed />
        </Route>
        <Route path="/user/closed" exact>
          <Closed />
        </Route>
        <Route path="/user/archived" exact>
          <Archived />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/massage" exact>
          <Massage />
        </Route>
        <Route path="/myprofile" exact>
          <UserProfile />
        </Route>
        <Route path="/Soundbank/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/SPsign-up" exact>
          <Register />
        </Route>
        <Route path="/test" exact>
          <UserDasboard />
        </Route>
        <Route path="/spdsh" exact>
          <SpDashboard />
        </Route>
        <Route path="/benefits" exact>
          <MemberBenefits />
        </Route>
        <Route path="/payment" exact>
          <SpPayment />
        </Route>
        <Route path="/pay_request" exact>
          <PaymentRequest />
        </Route>

        {/* sp profile route */}

        <Route path="/spprofile" exact>
          <SpProfile />
        </Route>

        {/* sp edit profile route */}
        <Route path="/spprofile/edit">
          <EditSpProfile />
        </Route>
        {/* sp edit profile */}
        <Route path="/spprofile/editprofile">
          <EditProfile />
        </Route>
        <Route path="/para">
          <Bbutton />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
