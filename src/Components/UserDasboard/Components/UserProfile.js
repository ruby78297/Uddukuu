import { Button } from "react-bootstrap";
import React from "react";
import DasboardNav from "../DasboardNav";
import "./userProfile.css";
import Footer from "../../Footer/Footer";

const UserProfile = () => {
  return (
    <div>
      <div className="Userprofile-container">
        <DasboardNav />
        <div className="Userprofile-0">Name</div>
      </div>
      <div className="Userprofile-1">
        <ul className="Userprofile-2">
          <li className="Userprofile-li">Profile</li>
          <li className="Userprofile-li">Reviews</li>
        </ul>

        <Button variant="secondary" className="Userprofile-btn">
          {" "}
          Edit Profile
        </Button>
      </div>
      <div className="Userprofile-3"></div>
      <Footer />
    </div>
  );
};
export default UserProfile;
