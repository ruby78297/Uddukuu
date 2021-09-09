import React from "react";
import DashboardNav from "../DasboardNav";
import { Link } from "react-dom";
import { BiLabel } from "react-icons/bi";
import Footer from "../../Footer/Footer";
import "../Dasboardnav.css";

const Archived = () => {
  return (
    <div className="allJobs-container">
      <DashboardNav />
      <div className="dash-active">Archived</div>

      <div className="dash-filter">Filter Jobs</div>
      <div className="dash-container">
        <div className="dash-container-0">
          <ul>
            <li className="dash-li-0">All</li>

            <li className="dash-li-1">Open</li>
            <li className="dash-li-2">Not yet funded </li>
            <li className="dash-li-3">Active</li>
            <li className="dash-li-4">Completed</li>
            <li className="dash-li-5">Cancelled</li>
            <li className="dash-li-6">Archived</li>
          </ul>
        </div>
        <div className="dash-container-1"> No jobs here.</div>
        <div>
          <ul>
            <li className="dash-li-7"> Custom Labels</li>
            <li className="dash-li-8">
              {" "}
              <div style={{ marginTop: "6px" }}>
                <BiLabel />
              </div>
              labelExample
            </li>
            <li className="dash-li-9"> Select a job to add a label</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Archived;
