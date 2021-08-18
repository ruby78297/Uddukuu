import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container-1">
      <div className="quote-container">
        <div className="quote">
          {" "}
          <p id="quote-1">
            <h2> Welcome to Udukku </h2>{" "}
          </p>
          <p id="quote-2">
            {" "}
            <h3> The Music World </h3>
          </p>
        </div>
      </div>
      <br></br>
      <div className="search-container">
        <div className="search-box">
          <form action="/" method="get">
            <label htmlFor="header-search">
              <span className="visually-hidden"></span>
            </label>
            <input
              type="text"
              class="search-item"
              placeholder="What are you looking for"
              name="s"
            />
            <button className="btn-1" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
