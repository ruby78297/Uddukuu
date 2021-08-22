import React from "react";
import "./Singers.css";
import Footer from "../../../Footer/Footer";
import SingersBanner from "./SingersBanner";

const Singers = () => {
  return (
    <div>
      <SingersBanner />
      <div className="singers-data-cards"></div>
      <Footer />
    </div>
  );
};
export default Singers;
