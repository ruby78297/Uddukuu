import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditProfileDropdown = () => {
  return (
    <div>
      <label>What genre are you a specialist in?</label>
      <br />
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          variant="success"
          className="nav-drp"
          style={{ width: "70%" }}
          //   style={{ overflow: "hidden", height: "500px" }}
        >
          Select your genre
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ overflow: "hidden", height: "400px" }}>
          <Dropdown.Item>Afrobeat</Dropdown.Item>
          <Dropdown.Item>Americana</Dropdown.Item>
          <Dropdown.Item>Blues</Dropdown.Item>
          <Dropdown.Item>Choral</Dropdown.Item>
          <Dropdown.Item>Chill</Dropdown.Item>
          <Dropdown.Item>Classical</Dropdown.Item>
          <Dropdown.Item>Country</Dropdown.Item>
          <Dropdown.Item>Dubstep</Dropdown.Item>
          <Dropdown.Item>EDM</Dropdown.Item>
          <Dropdown.Item>Electric Pop</Dropdown.Item>
          <Dropdown.Item>Funk</Dropdown.Item>
          <Dropdown.Item>Gospel</Dropdown.Item>
          <Dropdown.Item>Heavy Metal</Dropdown.Item>
          <Dropdown.Item>Heavy Rock</Dropdown.Item>
          <Dropdown.Item>Hip Hop</Dropdown.Item>
          <Dropdown.Item>House</Dropdown.Item>
          <Dropdown.Item>Indie Pop</Dropdown.Item>
          <Dropdown.Item>Jazz</Dropdown.Item>
          <Dropdown.Item>Latin</Dropdown.Item>
          <Dropdown.Item>Pop</Dropdown.Item>
          <Dropdown.Item>Pop-Rock</Dropdown.Item>
          <Dropdown.Item>R&B-Soul</Dropdown.Item>
          <Dropdown.Item>Reggae</Dropdown.Item>
          <Dropdown.Item>Rock</Dropdown.Item>
          <Dropdown.Item>Soft Pop</Dropdown.Item>
          <Dropdown.Item>Soundtrack</Dropdown.Item>
          <Dropdown.Item>Techno</Dropdown.Item>
          <Dropdown.Item>Trance</Dropdown.Item>
          <Dropdown.Item>Trap</Dropdown.Item>
          <Dropdown.Item>Tropical</Dropdown.Item>
          <Dropdown.Item>World</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default EditProfileDropdown;
