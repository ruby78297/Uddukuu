import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="card-container">
      
      <div className="title">{props.title}</div>
      <div className="des">{props.des}</div>
    </div>
  );
};

export default Cards;


 {/* {CardData.map((data, key) => {
        return (
          <div className="card-data" key={key}>
            <div className="image"></div>
            <h1 className="title">{data.title} </h1>
            <div className="des"> {data.des}</div>
          </div>
        );
      })} */}

      {/* <div className="image">{props.image}</div> */}