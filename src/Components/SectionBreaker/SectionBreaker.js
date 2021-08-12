import React from "react";
import "./SectionBreaker.css";
import music from "./music.png";
import music1 from "./music1.png";
import music2 from "./music2.png";

const ServiceBreaker = () => {
  return (
    <div className="grid-container  ">
      <div className="col-sm service-1 ">
        <div className="col-sm    ">
          <img src={music} height="200" width="200" alt="img"></img>
          <div className="breaker1-title">
            <h4>Sounds like music.</h4>
          </div>
        </div>
      </div>
      <div className="col-sm service-2 ">
        <div className="col-sm ">
          <img src={music2} height="200" width="200" alt="img"></img>
          <div className="breaker1-title">
            <h4> The Music speaks.</h4>
          </div>
        </div>
      </div>
      <div className="col-sm service-3 ">
        <div className="col-sm    ">
          <img src={music1} height="200" width="200" alt="img"></img>
          <div className="breaker1-title">
            <h4>Drift into the Music.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBreaker;
