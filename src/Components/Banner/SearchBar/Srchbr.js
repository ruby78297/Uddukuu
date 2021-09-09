import React from "react";
import "./Srchbr.css";

function Srchbr({ placeholder, data }) {
  return (
    <div className=" row search-contain ">
      <div class="topnav">
        <input type="text" placeholder="Search.." />
      </div>
    </div>
  );
}
export default Srchbr;
