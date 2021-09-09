import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "../../Artists/Artist.css";

export const ProducersBanner = () => {
  return (
    <div className="artist-banner-container">
       {
    window.scrollTo(0, 0)
  }
      <Navbar />

      <div className="artist-banner-text">
        <div className="artist-banner-heading">
          Top Music Producers for hire
          <div className="artist-banner-heading-0">
            Find the perfect music producer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="producer-banner-heading-1">
            (License Beats and Tracks Here)
          </div>
          <div className="producer-banner-heading-2">
            The Insider’s guide to hiring a music producer
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
export default ProducersBanner;
