import React from "react";
import Footer from "../../Footer/Footer";
import DasboardNav from "../DasboardNav";
import "./Favorites.css";

const Favorites = () => {
  return (
    <div>
      <div className="fav-banner-container">
        <DasboardNav />
        <div className="fav-banner-0">Your Favorites</div>
      </div>
      <div className="fav-item-container">
        Add your favorite pros by clicking 'Add to Favorites'. Collect and share
        your list here.
      </div>
      <Footer />
    </div>
  );
};
export default Favorites;
