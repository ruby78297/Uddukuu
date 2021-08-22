import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "./WriterBanner.css";

export const WriterBanner = () => {
  return (
    <div className="writer-banner-container">
      <Navbar />

      <div className="writer-banner-text">
        <div className="writer-banner-heading">
          Top music writer for hire
          <div className="writer-banner-heading-0">
            Find the perfect music writer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="writer-banner-heading-1">
              (License Beats and Tracks Here)
            </div>
            <div className="writer-banner-heading-2">
              The Insider’s guide to hiring a music writer
            </div> */}
          <div className="writer-banner-heading-3">
            <i class="fas fa-play-circle"></i>
            <div className="text-lg p-6">Hear from our providers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WriterBanner;
