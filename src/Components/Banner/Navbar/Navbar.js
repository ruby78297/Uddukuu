import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./udukku-logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="uddukku" className="logo" />
      <ul
        className={isMobile ? "mobile-nav-list" : "nav-list"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home"></Link>
        <Link to="/explore" className="explore">
          <li>Explore</li>
        </Link>

        <Link to="/tracks" className="tracks">
          <li>Tracks</li>
        </Link>
        <Link to="/newtrack" className="newtrack">
          <li>New Track</li>
        </Link>
        <Link to="/registration" className="registration">
          <li>Register</li>
        </Link>
        <Link to="/login" className="login">
          <li>Login</li>
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
    </nav>
  );
};
export default Navbar;
