import React from "react";

import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner-item wrap">
      <Navbar />

      <SearchBar></SearchBar>
    </div>
  );
};
export default Banner;
