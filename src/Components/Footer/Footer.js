import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="row">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">Join Us anytime</p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />

              <Link buttonStyle="btn--outline">Subscribe</Link>
            </form>
          </div>
        </section>
      </div>

      <div className="footer-links">
        <div className=" footer-link-wrapper">
          <div className="row">
            <div className="col-sm col-md footer-link-items">
              <h2>About Us</h2>
              <Link to="/sign-up">How it works</Link>

              <Link to="/">Testimonials</Link>

              <Link to="/">Careers</Link>

              <Link to="/">Investors</Link>

              <Link to="/">Terms of Service</Link>
            </div>
            <div className="col-sm col-md footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/sign-up">How it works</Link>

              <Link to="/">Testimonials</Link>

              <Link to="/">Careers</Link>

              <Link to="/">Investors</Link>

              <Link to="/">Terms of Service</Link>
            </div>

            <div className="col-sm col-md footer-link-items">
              <h2>About Us</h2>
              <Link to="/sign-up">How it works</Link>

              <Link to="/">Testimonials</Link>

              <Link to="/">Careers</Link>

              <Link to="/">Investors</Link>

              <Link to="/">Terms of Service</Link>
            </div>
            <div className="col-sm col-md footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/sign-up">How it works</Link>

              <Link to="/">Testimonials</Link>

              <Link to="/">Careers</Link>

              <Link to="/">Investors</Link>

              <Link to="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              {" "}
              uddukku
            </Link>
          </div>

          <small className="website-rights">udukku © 2021</small>
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
