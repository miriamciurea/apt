import React from "react";
import Hero from "../../components/navbar/Hero";
import Reviews from "../../components/reviews/Reviews";
import HomeProjects from "../../components/home-projects/HomeProjects";
import Slider from "../../components/slider-image/Slider";
import Loop from "../../components/loop/Loop";
import Domain from "../../components/domains/Domain";
import CompanyValues from "../../components/company-values/CompanyValues";
import Cta from "../../components/cta/Cta";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Domain />
        <HomeProjects />
        <Loop />
        <Slider />
        <CompanyValues />
        <Reviews />
        <Cta />
      </div>
    </>
  );
};

export default Home
