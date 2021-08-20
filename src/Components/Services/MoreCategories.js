import React from "react";
import { Link } from "react-router-dom";
import "./MoreCategories.css";

const MoreCategories = () => {
  return (
    <div className="more">
      <Link to="/more" className="">
        <p id="cat">More Categories</p>
      </Link>
    </div>
  );
};

export default MoreCategories;
