import React from "react";
import "./AllCategories.css";
import AllCatBanner from "./AllCatBanner";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import AllCatTitle from "./AllCatTitle";
import AllCatCardsContainer from "./AllCatCardsContainer";
const AllCategories = () => {
  return (
    <div>
      <AllCatBanner />
      <Services />
      <AllCatTitle />
      <AllCatCardsContainer />
      <Footer />
    </div>
  );
};
export default AllCategories;
