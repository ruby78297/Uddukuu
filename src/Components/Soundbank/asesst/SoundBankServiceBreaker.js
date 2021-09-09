import React from "react";
import SoundBankBanner from "./SoundBankBanner";
import { Link } from "react-router-dom";

const SoundBankServiceBreaker = () => {
  return (
    <div
      style={{
        height: "30px",
        marginTop: "10px",
        textAlign: "center",
        color: "teal",
      }}
    >
      {" "}
      <Link> Load More </Link>
    </div>
  );
};
export default SoundBankServiceBreaker;
