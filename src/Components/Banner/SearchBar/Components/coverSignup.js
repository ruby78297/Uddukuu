import React from "react";
import Footer from "../../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "../Components/coverSignup.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CoverSignup = () => {
  return (
    <div className="coverSignup-container">
      <div className="coverSignup-nav">
        <Navbar />
      </div>
      <div className="coverSignup-card-container">
        <div className="coverSignup-card-0">
          <div className="coverSignup-card-heading-0  ">
            I want to hire a studio, engineer or session musician
          </div>
          <div className="coverSignup-card-heading-1 ">
            Hire professional engineers, producers or session musicians to work
            on your music.
          </div>
          <div className="coverSignup-card-heading-2">
            <Link to="/user">
              <Button variant="success " className="coverSignup-btn">
                HIRE A STUDIO PRO{" "}
              </Button>
            </Link>
          </div>
        </div>
        <div className="coverSignup-card-1">
          {" "}
          <div className="coverSignup-card-heading-0  ">
            I am a studio, engineer or session musician for hire
          </div>
          <div className="coverSignup-card-heading-1 ">
            Get listed as an engineer, producer or session musician and get
            hired for remote work.
          </div>
          <div className="coverSignup-card-heading-2">
            <Link to="provider">
              <Button variant="success " className="coverSignup-btn">
                GET HIRED AS A STUDIO PRO{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CoverSignup;
