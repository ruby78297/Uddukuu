import React from "react";
import "./SectionBreaker2.css";

const ServiceBreaker2 = () => {
  return (
    <div className="row section-Wraper">
      <div className=" section-Wraper-1">
        <div>
          <h2 className="section-Wraper-0-content">How Udukku works</h2>
        </div>
        <div className="section-wrapper-content-1">
          <div className="section-Wraper-1-content Wraper-1-content ">
            {" "}
            <ul style={{ display: "flex" }}>
              <li> Step-1:</li>

              <li style={{ fontSize: "20px", margin: "5px 0px 0px 17px" }}>
                {" "}
                Description
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="section-Wraper-1-content  Wraper-2-content">
            <ul style={{ display: "flex" }}>
              <li>Step-2:</li>

              <li style={{ fontSize: "20px", margin: "5px 0px 0px 17px" }}>
                {" "}
                Description
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="section-Wraper-1-content   Wraper-3-content ">
            <ul style={{ display: "flex" }}>
              <li>Step-3:</li>

              <li style={{ fontSize: "20px", margin: "5px 0px 0px 17px" }}>
                {" "}
                Description
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-sm section-breaker-image"></div>
    </div>
  );
};

export default ServiceBreaker2;
