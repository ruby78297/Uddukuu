import React from "react";
import "../../Artists/Artist.css";
import Navbar from "../../../Banner/Navbar/Navbar";
const SingersBanner = () => {
  return (
    <div className="artist-banner-container">
       {
    window.scrollTo(0, 0)
  }
      <Navbar />

      <div className="artist-banner-text">
        <div className="artist-banner-heading">
          Top Music Singer for hire
          <div className="artist-banner-heading-0">
            Find the perfect music singer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="singer-banner-heading-1">
            (License Beats and Tracks Here)
          </div>
          <div className="singer-banner-heading-2">
            The Insider’s guide to hiring a music singer
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
export default SingersBanner;
