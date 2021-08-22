import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "./InstrumentalistsBanner.css";

const InstrumentalistsBanner = () => {
  return (
    <div className="instrumentalists-banner-container">
      <Navbar />

      <div className="instrumentalists-banner-text">
        <div className="instrumentalists-banner-heading">
          Top Instrumentalists for hire
          <div className="instrumentalists-banner-heading-0">
            Find the perfect Instrumentalists to arrange, record, hire live
            Instrumentalists, and mix your next hit song.
          </div>
          {/* <div className="instrumentalists-banner-heading-1">
            (License Beats and Tracks Here)
          </div>
          <div className="instrumentalists-banner-heading-2">
            The Insider’s guide to hiring a Instrumentalists
          </div> */}
          <div className="instrumentalists-banner-heading-3">
            <i class="fas fa-play-circle"></i>
            <div className="text-lg p-6">Hear from our providers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstrumentalistsBanner;
