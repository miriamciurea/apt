import React from "react";
import styles from "./AboutUsDescription.module.css";
import Icon from "./Icon/Icon";
import { FaLightbulb } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { MdDiversity3 } from "react-icons/md";

const icons = [
  { iconComponent: <FaLightbulb />, text: "Innovation" },
  { iconComponent: <FaLeaf />, text: "Sustainabillity" },
  {
    iconComponent: <FiCheckCircle className={styles.icon} />,
    text: "Certified",
  },
  {
    iconComponent: <MdDiversity3 className={styles.icon} />,
    text: "Inclusive",
  },
  {
    iconComponent: <FaHardHat className={styles.icon} />,
    text: "Safety",
  },
];

const AboutUsDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.introContainer}>
        <h1 className={styles.title}>
          WELCOME TO <span className={styles.highlight}>APT</span>
        </h1>
        <p className={styles.text}>
          For <span className={styles.highlight}>20</span> years, we've
          specialized in <span className={styles.underlined}>rail</span> and{" "}
          <span className={styles.underlined}>fiber construction</span>{" "}
          projects, delivering high-quality, reliable solutions. Our experienced
          team is dedicated to excellence and innovation, prioritizing the
          well-being and professional growth of our staff.
          <br />
          <br /> At APT, we pride ourselves on our{" "}
          <span className={styles.underlined}>commitment to safety</span>,{" "}
          <span className={styles.underlined}>quality</span>, and{" "}
          <span className={styles.underlined}>customer satisfaction</span>.
        </p>
      </div>
      <div className={styles.iconsContainer}>
        {icons.map((icon) => (
          <Icon Component={icon.iconComponent} text={icon.text} />
        ))}
      </div>
    </div>
  );
};
export default AboutUsDescription;
