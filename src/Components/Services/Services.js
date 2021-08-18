import React from "react";
import "./Services.css";
import Cards from "./Cards";
import { CardData } from "./CardData";

const Services = () => {
  return (
    <div>
      <div className="services-title">Discover Top Music Production Pros</div>
      <div className="services">
        <div className="card-1 service-card ">
          <Cards
            id={CardData[0].id}
            title={CardData[0].title}
            des={CardData[0].des}
            image={CardData[0].image}
          ></Cards>
        </div>
        <div className="card-2 service-card">
          {" "}
          <Cards
            id={CardData[1].id}
            title={CardData[1].title}
            des={CardData[1].des}
            image={CardData[1].image}
          ></Cards>
        </div>

        <div className="card-3 service-card">
          {" "}
          <Cards
            id={CardData[2].id}
            title={CardData[2].title}
            des={CardData[2].des}
            image={CardData[2].image}
          ></Cards>
        </div>

        <div className="card-4 service-card">
          <Cards
            id={CardData[3].id}
            title={CardData[3].title}
            des={CardData[3].des}
            image={CardData[3].image}
          ></Cards>
        </div>

        <div className="card-5 service-card">
          <Cards
            id={CardData[4].id}
            title={CardData[4].title}
            des={CardData[4].des}
            image={CardData[4].image}
          ></Cards>
        </div>

        <div className="card-6 service-card">
          <Cards
            id={CardData[5].id}
            title={CardData[5].title}
            des={CardData[5].des}
            image={CardData[5].image}
          ></Cards>
        </div>
      </div>
    </div>
  );
};

export default Services;
