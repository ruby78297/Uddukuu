import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import SectionBreaker from "./Components/SectionBreaker/SectionBreaker";
import OtherServices from "./Components/OtherServices/OtherServices";
import SectionBreaker2 from "./Components/SectionBreaker/SectionBreakjer2";
import SectionBreaker3 from "./Components/SectionBreaker/SectionBreaker3";

function App() {
  return (
    <div className="App">
      <Banner />
      <Services />
      <SectionBreaker />
      <OtherServices />
      <SectionBreaker2 />
      <SectionBreaker3 />
      <Footer />
    </div>
  );
}

export default App;
