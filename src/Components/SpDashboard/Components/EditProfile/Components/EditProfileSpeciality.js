import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditProfileSpeciality = () => {
  return (
    <div>
      <label>Your Speciality</label>
      <br />
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          variant="success"
          className="nav-drp "
          style={{ width: "70%" }}
        >
          Select your Speciality
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Mixing Engineers</Dropdown.Item>
          <Dropdown.Item>Mastering Engineers</Dropdown.Item>
          <Dropdown.Item>Recording Studios</Dropdown.Item>
          <Dropdown.Item>Editing</Dropdown.Item>
          <Dropdown.Item>Vocal Comping</Dropdown.Item>
          <Dropdown.Item>Vocal Tuning</Dropdown.Item>
          <Dropdown.Item>Beat Makers</Dropdown.Item>
          <Dropdown.Item>Producers</Dropdown.Item>
          <Dropdown.Item>Sound Design</Dropdown.Item>
          <Dropdown.Item>Post Editing</Dropdown.Item>
          <Dropdown.Item>Post Mixing</Dropdown.Item>
          <Dropdown.Item>Live Sound</Dropdown.Item>
          <Dropdown.Item>Dilogue Editing</Dropdown.Item>
          <Dropdown.Item>Session Conversion</Dropdown.Item>
          <Dropdown.Item>Remixing</Dropdown.Item>
          <Dropdown.Item>Production Sound Mixer</Dropdown.Item>
          <Dropdown.Item>Boom Operator</Dropdown.Item>
          <Dropdown.Item>Game Audio</Dropdown.Item>
          <Dropdown.Item>Restoration</Dropdown.Item>
          <Dropdown.Item>Drum</Dropdown.Item>
          <Dropdown.Item>Piano</Dropdown.Item>
          <Dropdown.Item>Guitae</Dropdown.Item>
          <Dropdown.Item>Singer- Male</Dropdown.Item>
          <Dropdown.Item>Singer- Female</Dropdown.Item>
          <Dropdown.Item>Songwriter-lyrics</Dropdown.Item>
          <Dropdown.Item>Songwriter-Music</Dropdown.Item>
          <Dropdown.Item>Violin</Dropdown.Item>
          <Dropdown.Item>Cello</Dropdown.Item>
          <Dropdown.Item>Flutes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default EditProfileSpeciality;
