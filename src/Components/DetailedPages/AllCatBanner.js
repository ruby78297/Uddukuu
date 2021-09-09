import React from "react";
import Navbar from "../Banner/Navbar/Navbar";
import "./AllCatBanner.css";

const AllCatBanner = () => {
  return (
    <div className="all-cat-banner">
        {
    window.scrollTo(0, 0)
  } 
      <Navbar />
      <div>
        <div className="all-cat-banner-text">
          <div className="all-cat-banner-heading">
            Discover Top Music Production Pros
            <div className="all-cat-banner-heading-0">
              Mix & Mastering Engineers, Singers & Recording Studios for Hire
            </div>
            <div className="all-cat-banner-heading-1">
              <i class="fas fa-play-circle"></i>
              <div className="text-lg p-6">Hear from our providers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllCatBanner;
