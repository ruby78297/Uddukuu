import React from "react";
import { Button } from "react-bootstrap";
import SpDashboardNav from "../../SpDashboardNav";
import { AiOutlineSearch } from "react-icons/ai";

import "./SpPayment.css";
import { Link } from "react-router-dom";

const SpPayment = () => {
  return (
    <div>
      <SpDashboardNav />
      <div className="sppayment-container">Payment Requests</div>
      <div>
        <ul className="sppayment-li-container">
          <li className="sppayment-li">Requests Sent</li>
          <li className="sppayment-li">Requests Received</li>
        </ul>
      </div>
      <div className="sppayment-container-0">
        <Link to="/pay_request">
          <Button variant="success" className="sppayment-btn">
            New Request
          </Button>
        </Link>

        <div className="sppayment-container-2">
          No payment requests yet. Click here to create.{" "}
        </div>
        <div className="msg-wrap">
          <div className="msg-search">
            <input
              type="text"
              className="searchTerm "
              placeholder="search "
              id="sppayment-search"
            />
            <button type="submit" className="msg-searchButton">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpPayment;
