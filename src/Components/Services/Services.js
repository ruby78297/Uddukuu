import React from "react";
import "./Services.css";
import Cardlist from "./Cardlist";
import { CardsData } from "./CardsData";

const Services = (props) => {
  return (
    <div className="cards-container">
      <Cardlist CardsData={CardsData} />
    </div>
  );
};

export default Services;
