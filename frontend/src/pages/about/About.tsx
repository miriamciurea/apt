import React from "react";
import EarlyDays from "../../components/early-days/EarlyDays";
import AboutUsDescription from "../../components/AboutUsDescription/AboutUsDescription";
import Team from "../../components/Team/Team";
import AboutHeader from "../../components/about-header/aboutHeader";
import LeftHeader from "../../components/left-header/LeftHeader";
import Cta from "../../components/cta/Cta";


const About: React.FC = () => {
  return (
    <>
      <div className="container">
        <AboutHeader />
        <AboutUsDescription />
        <EarlyDays />
        <Team />
        <LeftHeader />
        <Cta />
      </div>
    </>
  );
};

export default About;
