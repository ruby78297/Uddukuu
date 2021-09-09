import React, { useState } from "react";
// import Button from 'react-bootstrap/Button'
import "./SoundBankcard.css";
import { AiFillPauseCircle } from "react-icons/ai";
import { GrCirclePlay } from "react-icons/gr";
import { Button } from "react-bootstrap";
import SoundCard from "./SoundCard";
import Footer from "../../Footer/Footer";

const SoundBankcard = (props) => {
  return (
    <div>
      <SoundCard />
    </div>
  );
};
export default SoundBankcard;
