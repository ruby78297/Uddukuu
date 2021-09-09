import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "../../Artists/Artist.css";

const MixingEngineersBanner = () => {
  return (
    <div className="artist-banner-container">
       {
    window.scrollTo(0, 0)
  }
      <Navbar />

      <div className="artist-banner-text">
        <div className="artist-banner-heading">
          Top music mixingEngineer for hire
          <div className="artist-banner-heading-0">
            Find the perfect music mixingEngineer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="artist-banner-heading-1">
            (License Beats and Tracks Here)
          </div>
          <div className="artist-banner-heading-2">
            The Insider’s guide to hiring a music mixingEngineer
          </div> */}
          <div className="artist-banner-heading-3">
            <i class="fas fa-play-circle"></i>
            <div className="text-lg p-6">Hear from our providers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MixingEngineersBanner;
