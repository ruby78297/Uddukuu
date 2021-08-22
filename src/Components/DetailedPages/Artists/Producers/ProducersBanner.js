import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "./ProducersBanner.css";

export const ProducersBanner = () => {
  return (
    <div className="producer-banner-container">
      <Navbar />

      <div className="producer-banner-text">
        <div className="producer-banner-heading">
          Top Music Producers for hire
          <div className="producer-banner-heading-0">
            Find the perfect music producer to arrange, record, hire live
            musicians, and mix your next hit song.
          </div>
          {/* <div className="producer-banner-heading-1">
            (License Beats and Tracks Here)
          </div>
          <div className="producer-banner-heading-2">
            The Insider’s guide to hiring a music producer
          </div> */}
          <div className="producer-banner-heading-3">
            <i class="fas fa-play-circle"></i>
            <div className="text-lg p-6">Hear from our providers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProducersBanner;
