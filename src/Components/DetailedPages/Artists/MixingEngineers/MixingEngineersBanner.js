import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "./MixingEngineersBanner.css";

const MixingEngineersBanner = () => {
  return (
    <div className="mixingEngineer-banner-container">
      <Navbar />

      <div className="mixingEngineer-banner-text">
        <div className="mixingEngineer-banner-heading">
          Top music mixingEngineer for hire
          <div className="mixingEngineer-banner-heading-0">
            Find the perfect music mixingEngineer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="mixingEngineer-banner-heading-1">
            (License Beats and Tracks Here)
          </div>
          <div className="mixingEngineer-banner-heading-2">
            The Insider’s guide to hiring a music mixingEngineer
          </div> */}
          <div className="mixingEngineer-banner-heading-3">
            <i class="fas fa-play-circle"></i>
            <div className="text-lg p-6">Hear from our providers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MixingEngineersBanner;
