import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import logo from "../Banner/Navbar/udukku-logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="row">
          <div className=" col-md footer-link-items footer-link-items-1">
            <p className="footer-pera-0 text-white">
              {" "}
              UDUKKU is a marketplace of the India’s top music production talent
            </p>
            <p className="text-teal-400 footer-pera-0 ">
              info@Udukku.com <br />
              +(91)7487848842
            </p>
          </div>
          <div className=" col-md footer-link-items footer-link-items-2">
            <Link to="/sign-up">Sign up as a provider</Link>

            <Link to="/">Sign in</Link>

            <Link to="/">About Us</Link>

            <Link to="/">User Reviews</Link>

            <Link to="/">FAQ</Link>
          </div>

          <div className=" col-md footer-link-items footer-link-items-3">
            <h2>About Us</h2>
            <Link to="/sign-up">Terms</Link>

            <Link to="/">Tutorials</Link>

            <Link to="/">Privacy</Link>

            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/">
              {" "}
              <img src={logo} alt="uddukku" className="logo" />
            </Link>
          </div>

          <div className="website-rights">udukku © 2021</div>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="twitter"
            >
              <i className="fab fa-facebook-f " />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <i className="fab fa-instagram " />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
