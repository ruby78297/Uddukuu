import React from "react";
import "./AllCatCards.css";
import { DetailedData } from "../API/DetailedData";

const AllCatCards = (props) => {
  return (
    <>
      <div className="all-cat-cards">
        {" "}
        {DetailedData.map((data, index) => {
          return (
            <div className="cat-card">
              <div className="cat-card-title ">{data.title} </div>
              <div className="cat-card-des">{data.des} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AllCatCards;
