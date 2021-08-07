import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">udukku</h3>
      <ul
        className={isMobile ? "mobile-nav-list" : "nav-list"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home"></Link>
        <Link to="/explore" className="explore">
          <li>Explore</li>
        </Link>
        <Link to="/login" className="login">
          <li>Login</li>
        </Link>
        <Link to="/tracks" className="tracks">
          <li>Tracks</li>
        </Link>
        <Link to="/newtrack" className="newtrack">
          <li>New Track</li>
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
