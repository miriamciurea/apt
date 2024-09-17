import React from "react";
import EarlyDays from "../../components/early-days/EarlyDays";
import AboutUsDescription from "../../components/AboutUsDescription/AboutUsDescription";
import Team from "../../components/Team/Team";

const About: React.FC = () => {
  return (
    <>
      <div className="container">
        <EarlyDays />
        <AboutUsDescription />
        <Team />
       </div>
    </>
  );
};

export default About

{/* <Hero /> */}
