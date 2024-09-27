import React from "react";
import * as styles from "./LeftHeader.module.css";

const LeftHeader: React.FC = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.introContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            We are active in <span className={styles.underlined}>multiple domains</span>, ensuring comprehensive solutions tailored to your needs.
            Our expertise spans from initial planning to final execution.<br /><br />
            We undertake projects from scratch and deliver high-quality, turnkey solutions.
            Trust us to complete your projects from start to finish, maintaining <span className={styles.underlined}>excellence</span> every step of the way.
          </p>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            WHAT <span className={styles.highlight}>WE</span> OFFER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LeftHeader;
