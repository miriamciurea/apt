import React from "react";
import AboutUsDescription from "../../components/AboutUsDescription/AboutUsDescription";
import Team from "../../components/Team/Team";
import AboutHeader from "../../components/about-header/aboutHeader";

const About: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <AboutUsDescription />
      <Team />
    </>
  );
};

export default About;
