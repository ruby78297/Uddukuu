import React from "react";
import AllCatCards from "./AllCards/AllCatCards";
import { DetailedData } from "./API/DetailedData";
import "./AllCatCardsContainer.css";

const AllCatCardsContainer = () => {
  return (
    <div className="all-cards-container">
      <AllCatCards></AllCatCards>
    </div>
  );
};
export default AllCatCardsContainer;
