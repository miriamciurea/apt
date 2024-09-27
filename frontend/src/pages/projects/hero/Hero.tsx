import React from "react";
import * as styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        OUR <span>PROJECTS</span>
      </div>

      <div className={styles.subtitle}>
      We believe in the power of <strong>strong partnerships</strong>. <u>Every</u> <span>collaboration</span>, no matter the scale, is treated <strong>with the utmost care and respect</strong>.
      </div>
    </header>
  );
};

export default Hero;
