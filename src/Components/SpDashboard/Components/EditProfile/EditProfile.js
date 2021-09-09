import React, { useRef, useState } from "react";
import "./EditProfile.css";
import { Form } from "react-bootstrap";
import { validateFields } from "../../../../Validation";
import classnames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import Verification from "../EditProfile/Components/verification";
import MyInterview from "../EditProfile/Components/MyInterview";
import EmailSettings from "../EditProfile/Components/EmailSettings";
import EditProfileDropdown from "./Components/EditProfileDropdown";
import EditProfileSpeciality from "./Components/EditProfileSpeciality";
import { Button } from "react-bootstrap";
import logo from "../../../Banner/Navbar/udukku-logo.png";
import EditProfileFooter from "./Components/EditProfileFooter";

const EditProfile = () => {
  const [editProfile, setEditProfile] = useState(true);
  const [verification, setVerification] = useState(false);
  const [Interview, setInterview] = useState(false);
  const [emailSettings, setEmailSettings] = useState(false);

  const ProfileHandler = () => {
    setEditProfile(true);
    setVerification(false);
    setInterview(false);
    setEmailSettings(false);
  };

  const VerificationHandler = () => {
    setEditProfile(false);
    setVerification(true);
    setInterview(false);
    setEmailSettings(false);
  };

  const InterviewHandler = () => {
    setEditProfile(false);
    setVerification(false);
    setInterview(true);
    setEmailSettings(false);
  };
  const EmailHandler = () => {
    setEditProfile(false);
    setVerification(false);
    setInterview(false);
    setEmailSettings(true);
  };

  const Input1Ref = useRef(null);
  const Input2Ref = useRef(null);
  const Input3Ref = useRef(null);
  const Input4Ref = useRef(null);
  const Input5Ref = useRef(null);
  const Input6Ref = useRef(null);
  const Input7Ref = useRef(null);
  const Input8Ref = useRef(null);
  const Input9Ref = useRef(null);
  const Input10Ref = useRef(null);
  const Input11Ref = useRef(null);
  const Input12Ref = useRef(null);
  const Input13Ref = useRef(null);
  const Input14Ref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      Input1Ref.current.value &&
      Input2Ref.current.value &&
      Input3Ref.current.value &&
      Input4Ref.current.value &&
      Input5Ref.current.value &&
      Input6Ref.current.value &&
      Input7Ref.current.value &&
      Input8Ref.current.value &&
      Input9Ref.current.value &&
      Input10Ref.current.value &&
      Input11Ref.current.value &&
      Input12Ref.current.value &&
      Input13Ref.current.value &&
      Input14Ref.current.value
    ) {
      console.log("Hello");
    } else {
      toast.error("Please fill all fields");
    }
  };

  const handleImageChange = (e) => {
    let reader = new FileReader();
    const files = e.target.files;

    if (files.length) {
      const file = files[0];
      console.log(file);
    }
  };

  return (
    <>
      <div className="navbar" id="payreq-logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="uddukku" className="logo" />
        </Link>
      </div>
      <div className="editprofile-container-0">
        <div>
          <div className="editprofile-title-1" onClick={ProfileHandler}>
            Edit My Profile
          </div>
          <div className="editprofile-title-2" onClick={VerificationHandler}>
            Profile verification
          </div>
          <div className="editprofile-title-3" onClick={InterviewHandler}>
            My Interview
          </div>
          <div className="editprofile-title-4" onClick={EmailHandler}>
            Email Settings
          </div>
        </div>
        <div>
          {" "}
          {editProfile ? (
            <div className="edit-profile-cntainer">
              {" "}
              <Form onSubmit={submitHandler}>
                <div className="edit-profile-heading">Edit your profile</div>
                <label>Profile name</label>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  className="edit-profile-input"
                  ref={Input1Ref}
                  minlength="8"
                ></input>
                <br />
                <label>What do you do? (Be creative)</label>
                <br />
                <input
                  type="text"
                  placeholder=""
                  className="edit-profile-input"
                  ref={Input2Ref}
                  minlength="8"
                ></input>
                <br />
                <label>Location name</label>
                <br />
                <input
                  type="text"
                  placeholder="location"
                  className="edit-profile-input"
                  ref={Input3Ref}
                  minlength="8"
                ></input>
                <br />
                <label>The pitch</label>
                <br />
                <textarea
                  name="Text1"
                  cols="40"
                  rows="5"
                  className="edit-profile-input"
                  ref={Input4Ref}
                  minlength="10"
                />
                <label>Description</label>
                <textarea
                  name="Text1"
                  cols="40"
                  rows="10"
                  className="edit-profile-input"
                  ref={Input5Ref}
                  minlength="10"
                />
                <label>Add a photo</label>
                <br />
                <input
                  type="file"
                  onChange={handleImageChange}
                  // accept="image/png, image/jpeg"
                />
                <br />
                <br />
                <label>AllMusic credits</label>
                <br />
                <input
                  type="text"
                  placeholder="location"
                  className="edit-profile-input"
                  ref={Input6Ref}
                  minlength="8"
                ></input>
                <br />
                <label>Additional Credits</label>
                <br />
                <input
                  type="text"
                  placeholder="location"
                  className="edit-profile-input"
                  ref={Input7Ref}
                  minlength="8"
                ></input>
                <br />
                <label>Gear highlights</label>
                <br />
                <input
                  type="text"
                  placeholder="location"
                  className="edit-profile-input"
                  ref={Input8Ref}
                  minlength="8"
                ></input>
                <br />
                <label>Which known artists' sound do you specialize in?</label>
                <br />
                <input
                  type="text"
                  placeholder="location"
                  className="edit-profile-input"
                  ref={Input9Ref}
                  minlength="8"
                ></input>
                <br />
                <EditProfileDropdown />
                <br />
                <EditProfileSpeciality />
                <label>Sound Cloud Playlist</label>
                <br />
                <input
                  type="text"
                  placeholder="location"
                  className="edit-profile-input"
                  ref={Input10Ref}
                  minlength="8"
                ></input>
                <br />
                <label>Terms of service</label>
                <br />
                <textarea
                  name="Text1"
                  cols="40"
                  rows="5"
                  className="edit-profile-input"
                  ref={Input11Ref}
                  minlength="10"
                />
                <br />
                <br />
                <label>Upload Sample Audio</label>

                <br />
                <br />
                <input
                  type="file"
                  onChange={handleImageChange}
                  // accept="image/png, image/jpeg"
                />

                <br />
                <br />

                <p style={{ fontSize: "x-large", color: "black" }}>
                  How you want to be contacted
                </p>

                <label>How you want to be contacted</label>
                <br />
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="edit-profile-input"
                  ref={Input12Ref}
                  minlength="8"
                ></input>
                <br />
                <label>Contact Number</label>
                <br />
                <input
                  type="number"
                  placeholder="9999999999"
                  className="edit-profile-input"
                  ref={Input13Ref}
                  minlength="8"
                ></input>
                <br />
                <label>Website</label>
                <br />
                <input
                  type="text"
                  placeholder=""
                  className="edit-profile-input"
                  ref={Input14Ref}
                  minlength="8"
                ></input>
                <br />
                <br />
                <Button
                  variant="success"
                  style={{ textAlign: "center" }}
                  type="submit"
                >
                  Save changes
                </Button>
              </Form>
            </div>
          ) : null}
          {verification ? (
            <div>
              <Verification></Verification>
            </div>
          ) : null}
          {Interview ? (
            <div>
              <MyInterview />
            </div>
          ) : null}
          {emailSettings ? (
            <div>
              <EmailSettings />
            </div>
          ) : null}
        </div>
      </div>
      <EditProfileFooter />
    </>
  );
};
export default EditProfile;
