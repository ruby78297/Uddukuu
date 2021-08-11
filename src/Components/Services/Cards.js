import React from "react";
import "./Cards.css";
import { CardData } from "./CardData";

const Cards = () => {
  return (
    <div className="card-container">
      {CardData.map((data, key) => {
        return (
          <div className="card-data" key={key}>
            <div className="image"></div>
            <h1 className="title">{data.title} </h1>
            <div className="des"> {data.des}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
