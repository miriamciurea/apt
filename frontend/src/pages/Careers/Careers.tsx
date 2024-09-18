import React from "react";
import CareersFirstSection from "../../components/CareersFirstSection/CareersFirstSection";
import SendCVForm from "../../components/SendCVForm/SendCVForm";

const Careers: React.FC = () => {
  return (
    <>
      <div className="container">
        <CareersFirstSection />
        <SendCVForm />
      </div>
    </>
  );
};

export default Careers;
