import React from "react";
import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { Dropdown } from "react-bootstrap";
import { AiTwotoneHeart } from "react-icons/ai";
import logo from "../Banner/Navbar/udukku-logo.png";
import { Link } from "react-router-dom";
import "./SpDashboardNav.css";

const SpDashboardNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="dash-nav">
      <div className="navbar">
        <Link to="/">
          {" "}
          <img src={logo} alt="uddukku" className="logo" />
        </Link>

        <ul
          className={isMobile ? "mobile-nav-list" : "nav-list"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="home"></Link>
          <Link to="/explore" className="explore">
            <li>Explore</li>
          </Link>
          <Link to="/Soundbank" className="soundbank">
            <li>Sound Bank</li>
          </Link>
          <Link to="/massage" className="massage ">
            <li>Messages</li>
          </Link>

          <Link to="/favorites" className="favorites ">
            <li>
              <AiTwotoneHeart />
            </li>
          </Link>

          <li>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                variant="success"
                className="nav-drp"
              >
                My Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="spjobs">Jobs</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="spprofile">My Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="spdsh">Dashboard</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/benefits">Member Benefits</Link>
                </Dropdown.Item>
                <Dropdown.Item>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <Link to="/logout" className="logout ">
            <li>Logout</li>
          </Link>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </div>
  );
};
export default SpDashboardNav;
