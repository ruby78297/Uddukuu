import React from "react";
import Footer from "../../../Footer/Footer";
import InstrumentalistsBanner from "./InstrumentalistsBanner";
import "./Instrumentalists.css";
const Instrumentalists = () => {
  return (
    <div>
      <InstrumentalistsBanner />
      <div className="instrumentalists-data-cards"></div>
      <Footer />
    </div>
  );
};
export default Instrumentalists;
