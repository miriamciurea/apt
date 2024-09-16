import React from "react";
import styles from "./Domain.module.css";
import electric from "../../lotties/electric.json";
import train from "../../lotties/train.json";
import construction from "../../lotties/construction.json";
import LottieAnimation from "../dotie/LottieAnimation";

const Domain: React.FC = () => {
  const icons = [
    {
      component: <LottieAnimation animation={construction} />,
      subtitle: "CONSTRUCTION",
      description: "Description for Lottie Animation 1",
    },
    {
      component: <LottieAnimation animation={train} />,
      subtitle: "CIVIL - RAIL",
      description: "Description for Lottie Animation 2",
    },
    {
      component: <LottieAnimation animation={electric} />,
      subtitle: "UTILITY | POWER",
      description: "Description for Lottie Animation 3",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        CONNECTING <span className={styles.highlight}>UK</span>'S FUTURE
      </div>
      <div className={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <div
            className={`${styles.iconBlock} ${
              index === 0 ? styles.firstIcon : ""
            }`}
            key={index}
          >
            <div className={index === 0 ? styles.clipContainer : ""}>
              {icon.component}
            </div>
            <h3 className={styles.subtitle}>{icon.subtitle}</h3>
            <p className={styles.description}>{icon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domain;
