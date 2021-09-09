import React from "react";
import "./verification.css";
import { GrFacebook } from "react-icons/gr";
const Verification = () => {
  return (
    <div>
      <div className="verification-container-0">Your Verifications</div>
      <div className="verification-container-01">
        Connect to receive 'verified' badges on your account, increase trust and
        see your connections.
      </div>
      <div className="verification-container-1">
        {" "}
        You have confirmed your email:{" "}
      </div>
      <div className="verification-container-2">
        <ul className="verification-container-02">
          <li className="verification-container-icon">
            <GrFacebook />
          </li>
          <li className="verification-container-text">
            {" "}
            Connect with Facebook
          </li>
        </ul>
      </div>
      <div className="verification-container-3">
        {" "}
        We will never post to your facebook without your permission{" "}
      </div>
    </div>
  );
};
export default Verification;
