import React from "react";
import "./Filters.css";
import { Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

const Filters = () => {
  return (
    <div className="filter-main-div">
      <div className="container">
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Genre Type</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Hip Hop</Dropdown.Item>
              <Dropdown.Item>EDM</Dropdown.Item>
              <Dropdown.Item>R & B Soul </Dropdown.Item>
              <Dropdown.Item>Pop </Dropdown.Item>
              <Dropdown.Item>Electric Pop </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">License Type</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Non exclusive</Dropdown.Item>
              <Dropdown.Item>Exclusive</Dropdown.Item>
              <Dropdown.Item>Buyout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="msg-wrap-1">
          <div className="msg-search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search Songs..."
            />
            <button type="submit" className="msg-searchButton">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
