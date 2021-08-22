import React from "react";
import ProducersBanner from "./ProducersBanner";
import Footer from "../../../Footer/Footer";
import "./Producers.css";

const Producers = () => {
  return (
    <div>
      <ProducersBanner />
      <div className="Producers-data-cards"></div>
      <Footer />
    </div>
  );
};
export default Producers;
