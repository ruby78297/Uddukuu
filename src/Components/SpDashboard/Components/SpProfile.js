import { Button } from "react-bootstrap";
import React from "react";
import SpDashboardNav from "../SpDashboardNav";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../Footer/Footer";

const SpProfile = () => {
  const history = useHistory();
  const editProfileHandler = () => {
    history.push("/spprofile/editprofile");
  };
  return (
    <div>
      <div className="Userprofile-container">
        <SpDashboardNav />
        <div className="Userprofile-0">Name</div>
      </div>
      <div className="Userprofile-1">
        <ul className="Userprofile-2">
          <li className="Userprofile-li">Profile</li>
          <li className="Userprofile-li">Reviews</li>
        </ul>

        <Button
          variant="secondary"
          className="Userprofile-btn"
          onClick={editProfileHandler}
        >
          {" "}
          Edit Profile
        </Button>
      </div>
      <div className="Userprofile-3"></div>
      <div style={{ padding: "20px", borderBottom: "rgb(216, 213, 213)" }}>
        {" "}
        Reviews
      </div>
      <div className="Userprofile-4">
        <div className="Userprofile-4-reviews"></div>
        <div className="Userprofile-4-findme">Udukku Batch</div>
      </div>
      <Footer />
    </div>
  );
};
export default SpProfile;
