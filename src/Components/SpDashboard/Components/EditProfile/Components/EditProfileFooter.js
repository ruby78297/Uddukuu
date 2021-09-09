import React from "react";
import "../EditProfile.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const EditProfileFooter = () => {
  return (
    <div>
      <div>
        {" "}
        <ul className="edit-profile-footer-ul">
          <li className="edit-profile-footer-li">About</li>
          <li className="edit-profile-footer-li">Terms of use</li>
          <li className="edit-profile-footer-li">Knowledge</li>
          <li className="edit-profile-footer-li">FAQ</li>
          <li className="edit-profile-footer-li">Contact</li>
          <li className="edit-profile-footer-li">Popular searches</li>
          <li className="edit-profile-footer-li">Privacy</li>
          <li className="edit-profile-footer-icons">
            <ul className="edit-profile-footer-ul-1">
              <li className="edit-profile-footer-li-1">
                <FaFacebookF />
              </li>
              <li className="edit-profile-footer-li-2">likes</li>
            </ul>
          </li>
          <li className="edit-profile-footer-icons">
            <ul className="edit-profile-footer-ul-1">
              <li className="edit-profile-footer-li-1">
                <FaTwitter />
              </li>
              <li className="edit-profile-footer-li-2">Tweet</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="edit-profile-footer-copyright">udukku © 2021</div>
    </div>
  );
};
export default EditProfileFooter;
