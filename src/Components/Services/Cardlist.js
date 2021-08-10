import React from "react";
import Card from "./Card";
const Cardlist = ({ CardsData }) => {
  const cardComponent = CardsData.map((user, i) => {
    return (
      <Card
        key={i}
        id={CardsData[i].id}
        name={CardsData[i].name}
        des={CardsData[i].des}
        image={CardsData[i].image}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export default Cardlist;
