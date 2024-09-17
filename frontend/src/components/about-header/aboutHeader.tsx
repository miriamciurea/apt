import React from "react";
import styles from "../about-header/aboutHeader.module.css";

const AboutHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>About Us</h1>
      <a href="/join-our-team" className={styles.cta}>
        Join Our Team
        <span className={styles.chevrons}>
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </span>
      </a>
    </header>
  );
};

export default AboutHeader;
