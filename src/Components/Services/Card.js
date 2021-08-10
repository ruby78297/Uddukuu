import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card-item">
      <div className="card-image">
        <img alt="" src={props.image} />
      </div>

      <div className="card-data">
        <h2>{props.name}</h2>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

export default Card;
