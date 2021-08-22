import React from "react";
import "./SingersBanner.css";
import Navbar from "../../../Banner/Navbar/Navbar";
const SingersBanner = () => {
  return (
    <div className="singer-banner-container">
      <Navbar />

      <div className="singer-banner-text">
        <div className="singer-banner-heading">
          Top Music Singer for hire
          <div className="singer-banner-heading-0">
            Find the perfect music singer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="singer-banner-heading-1">
            (License Beats and Tracks Here)
          </div>
          <div className="singer-banner-heading-2">
            The Insider’s guide to hiring a music singer
          </div> */}
          <div className="singer-banner-heading-3">
            <i class="fas fa-play-circle"></i>
            <div className="text-lg p-6">Hear from our providers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingersBanner;
