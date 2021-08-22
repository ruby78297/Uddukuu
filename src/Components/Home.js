import React from "react";

import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import MoreCategories from "./Services/MoreCategories";
import SectionBreaker from "./SectionBreaker/SectionBreaker";
import CardCarousel from "./Carousel/CardCarousel";
import SectionBreaker2 from "./SectionBreaker/SectionBreakjer2";
import SectionBreaker3 from "./SectionBreaker/SectionBreaker3";
import ServicesTitle from "./Services/ServicesTitle";
const Home = () => {
  return (
    <div>
      <Banner />
      <ServicesTitle />
      <Services />
      <MoreCategories />
      <SectionBreaker />
      <CardCarousel />
      <SectionBreaker2 />
      <SectionBreaker3 />
      <Footer />
    </div>
  );
};

export default Home;
