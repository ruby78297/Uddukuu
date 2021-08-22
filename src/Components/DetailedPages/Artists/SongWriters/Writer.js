import React from "react";
import Footer from "../../../Footer/Footer";
import "./Writer.css";
import WriterBanner from "./WriterBanner";

const Writer = () => {
  return (
    <div>
      <WriterBanner />
      <div className="writer-data-cards"></div>
      <Footer />
    </div>
  );
};
export default Writer;
