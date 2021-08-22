import React from "react";
import Footer from "../../../Footer/Footer";
import "./MixingEngineers.css";
import MixingEngineersBanner from "./MixingEngineersBanner";
const MixingEngineers = () => {
  return (
    <div>
      <MixingEngineersBanner />
      <div className="MixingEngineers-data-cards"></div>
      <Footer />
    </div>
  );
};
export default MixingEngineers;
