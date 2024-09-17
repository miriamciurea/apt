import React from "react";
import EarlyDays from "../../components/early-days/EarlyDays";
import AboutUsDescription from "../../components/AboutUsDescription/AboutUsDescription";
import Team from "../../components/Team/Team";
import AboutHeader from "../../components/about-header/aboutHeader";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";

const About: React.FC = () => {
  return (
    <>
      <div className="container">
        <AboutHeader />
        <AboutUsDescription />
        <EarlyDays />
        <Team />
        <WhatWeOffer />
      </div>
    </>
  );
};

export default About;
