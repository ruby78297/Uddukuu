import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "./MasterEngineersBanner.css";
const MasterEngineersBanner = () => {
  return (
    <div className="masterengineers-banner-container">
      <Navbar />

      <div className="masterengineers-banner-text">
        <div className="masterengineers-banner-heading">
          Top master engineers for hire
          <div className="masterengineers-banner-heading-0">
            Find the perfect master engineers to arrange, record, hire live
            master engineers, and mix your next hit song.
          </div>
          {/* <div className="masterengineers-banner-heading-1">
            (License Beats and Tracks Here)
          </div> */}
          {/* <div className="masterengineers-banner-heading-2">
            The Insider’s guide to hiring a masterengineers
          </div> */}
          <div className="masterengineers-banner-heading-3">
            <i class="fas fa-play-circle"></i>
            <div className="text-lg p-6">Hear from our providers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MasterEngineersBanner;
