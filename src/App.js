import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Cards></Cards>
    </div>
  );
}

export default App;
