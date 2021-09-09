import React, { useRef, useState } from "react";
import "./SearchBar.css";
import Srchbr from "./Srchbr";
import { CardData } from "../../Services/CardData";
// import { Button, SearchResult } from "semantic-ui-react";
import ResultCards from "./Components/ResultCards";
import { Button } from "semantic-ui-react";

import SearchList from "./Components/SearchList";
import Scroll from "./Components/Scroll";

function SearchBar({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = CardData.filter((person) => {
    return person.title.toLowerCase().includes(searchField.toLowerCase());
    //  ||
    // person.name.toLowerCase().includes(searchField.toLowerCase())
  });

  const handleChange = (event) => {
    const data = event.target.value;
    setSearchField(data);

    if (data === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return <SearchList result={filteredPersons} />;
    }
  }

  return (
    <div className="search-main-container">
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

      <div className="search-container">
        <div className="ui search">
          <div className="ui icon input input-box">
            <input
              type="text"
              placeholder=" what are you looking for.."
              className="prompt"
              onChange={handleChange}
            />
            <i className="search icon search-icon" />
          </div>
        </div>
        {/* <div className="search-box">
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
        </div> */}
      </div>
      <div className="search-results">{searchList()}</div>
    </div>
  );
}
export default SearchBar;
