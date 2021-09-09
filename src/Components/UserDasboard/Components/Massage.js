import React from "react";
import DasboardNav from "../DasboardNav";
import "./Massage.css";
import { AiOutlineSearch } from "react-icons/ai";

import { MDBCol } from "mdbreact";
import Footer from "../../Footer/Footer";
const Massage = () => {
  return (
    <div>
      <DasboardNav />
      <div className="massage-container">
        <div className="massage-heading-0">Messages</div>
        <div>
          <ul className="massage-list" style={{ display: "flex" }}>
            <li className="massage-list-item">Inbox</li>
            <li className="massage-list-item">Unread</li>
            <li className="massage-list-item">Archived</li>
          </ul>
        </div>

        {/* <input type="text" placeholder="search message here" />
          <span>
           
          </span> */}
      </div>
      <div className="msg-wrap">
        <div className="msg-search">
          <input
            type="text"
            className="searchTerm"
            placeholder="search message"
          />
          <button type="submit" className="msg-searchButton">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="msg-items">
        Woohoo you've read all the messages in your inbox
      </div>
      <Footer />
    </div>
  );
};
export default Massage;
