import React from "react";
import SoundBankBanner from "./asesst/SoundBankBanner";
import SoundBankcard from "./asesst/SoundBankcard";
import Footer from "../Footer/Footer";
import Filters from "./asesst/Filters";
import SoundBankServiceBreaker from "./asesst/SoundBankServiceBreaker";
const SoundBank = () => {
  return (
    <div>
      <SoundBankBanner />
      <Filters />
      <SoundBankcard />
      <SoundBankServiceBreaker />
      <Footer />
    </div>
  );
};
export default SoundBank;
