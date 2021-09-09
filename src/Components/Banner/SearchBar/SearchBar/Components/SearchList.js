import React from "react";
import ResultCards from "./ResultCards";
import "./ResultCards.css";
import { CardData } from "../../../Services/CardData";

const SearchList = (props) => {
  const filtered = props.result.map((person) => (
    <ResultCards key={person.id} person={person} />
  ));
  return <div className="card-div">{filtered}</div>;
};
export default SearchList;
