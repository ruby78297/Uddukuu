import React from "react";
import { Button } from "react-bootstrap";
import "./EmailSettings.css";

const EmailSettings = () => {
  return (
    <div>
      <div style={{ fontSize: "40px" }}>Email Settings</div>
      <div className=" emailsettings-container">
        <div className=" emailsettings-0">Marketing emails</div>
        <div className=" emailsettings-1">
          {" "}
          <input type="checkbox" className=" emailsettings-2" />
          <label for="vehicle1"> Unsubscribe from marketing emails</label>
        </div>
      </div>
      <div
        className="myinterview-container-input"
        id="myinterview-container-btn"
      >
        <Button variant="success">Save</Button>
      </div>
    </div>
  );
};
export default EmailSettings;
