import React from "react";
import "./ResultCards.css";
import { Link } from "react-router-dom";

function ResultCards({ person }) {
  return (
    <Link to="">
      <div className="result-card">
        <div>
          <h2>{person.title}</h2>
          {/* <p>{person.name}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default ResultCards;
