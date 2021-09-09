import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "../../Artists/Artist.css";

export const WriterBanner = () => {
  return (
    <div className="artist-banner-container">
      {
    window.scrollTo(0, 0)
  }
      <Navbar />

      <div className="artist-banner-text">
        <div className="artist-banner-heading">
          Top music writer for hire
          <div className="artist-banner-heading-0">
            Find the perfect music writer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="writer-banner-heading-1">
              (License Beats and Tracks Here)
            </div>
            <div className="writer-banner-heading-2">
              The Insider’s guide to hiring a music writer
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
export default WriterBanner;
