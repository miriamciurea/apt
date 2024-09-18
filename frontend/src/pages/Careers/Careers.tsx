import React from "react";
import CareersFirstSection from "../../components/CareersFirstSection/CareersFirstSection";
import SendCVForm from "../../components/SendCVForm/SendCVForm";
import Cta from "../../components/cta/Cta";

const Careers: React.FC = () => {
  return (
    <>
      <div className="container">
        <CareersFirstSection />
        <SendCVForm />
      </div>
      <Cta />
    </>
  );
};

export default Careers;
