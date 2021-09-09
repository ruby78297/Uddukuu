import React from "react";
import DasboardNav from "./DasboardNav";
import "./UserDasboard.css";
import Footer from "../Footer/Footer";
import { BiLabel } from "react-icons/bi";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
export const UserDasboard = () => {
  return (
    <div>
      <DasboardNav />
      <div className="dash-active">Active</div>

      <div className="dash-filter">Filter Jobs</div>
      <div className="dash-container">
        <div className="dash-container-0">
          <ul>
            <Link to="/user/alljobs">
              <li className="dash-li-0">All</li>
            </Link>
            <Link to="/user/open">
              <li className="dash-li-1">Open</li>
            </Link>
            <Link to="/user/payment">
              <li className="dash-li-2">Not yet funded </li>
            </Link>
            <Link to="/user/active">
              {" "}
              <li className="dash-li-3">Active</li>
            </Link>
            <Link to="/user/completed">
              <li className="dash-li-4">Completed</li>
            </Link>
            <Link to="/user/closed">
              {" "}
              <li className="dash-li-5">Cancelled</li>
            </Link>
            <Link to="/user/archived">
              <li className="dash-li-6">Archived</li>
            </Link>
          </ul>
        </div>
        <div className="dash-container-1">
          {" "}
          <Table striped bordered hover className="PerformanceTable">
            <thead>
              <tr>
                <th className="PerformanceCell ">Open</th>
                <th className="PerformanceCell ">Not yet funded</th>
                <th className="PerformanceCell ">Active</th>
                <th className="PerformanceCell ">completed</th>
              </tr>
            </thead>
          </Table>
          No jobs here.
        </div>
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
