import React from "react";
import styles from "./CareersFirstSection.module.css";

const items = [
  { name: "INNOVATIVE AND IMPACTFUL WORK" },
  { name: "COMMITMENT TO WORK-LIFE BALANCE" },
  { name: "COLLABORATIVE AND SUPPORTIVE ENVIRONMENT" },
  { name: "A CULTURE OF RESPECT AND INTEGRITY" },
  { name: "OPPORTUNITIES FOR GROWTH AND DEVELOPMENT" },
  { name: "A CHANCE TO MAKE A DIFFERENCE" },
];

const CareersFirstSection: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          THRILLED TO WELCOME <span className={styles.highlight}>YOU</span> TO{" "}
          <span className={styles.underlined}>OUR TEAM</span>
        </h1>
        <h2 className={styles.subTitle}>WHY JOIN US?</h2>
        <div className={styles.reasonsContainer}>
          <div>
            {items.map((item) => {
              return (
                <div className={styles.agCoursesItem}>
                  <div className={styles.agCoursesItemLink}>
                    <div className={styles.agCoursesItemBg}></div>

                    <div className={styles.agCoursesItemTitle}>{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <img
            className={styles.image}
            src="https://images.unsplash.com/photo-1623489254637-a2dd8375243d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="construction worker"
          />
        </div>
      </div>
    </>
  );
};

export default CareersFirstSection;
