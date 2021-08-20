import React from "react";
import "./AllCategories.css";
import AllCatBanner from "./AllCatBanner";
import Services from "../Services/Services";
const AllCategories = () => {
  return (
    <div>
      <AllCatBanner />
      <Services />
      <div className="color"></div>
    </div>
  );
};
export default AllCategories;
