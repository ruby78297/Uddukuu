import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./udukku-logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
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
        <Link to="/login" className="blog">
          <li>Blog</li>
        </Link>
        <Link to="/Soundbank" className="soundbank">
          <li>Sound Bank</li>
        </Link>
        <Link to="/register" className="register">
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
    </div>
  );
};
export default Navbar;
