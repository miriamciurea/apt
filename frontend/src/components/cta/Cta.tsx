import React, { useEffect, useRef, useState } from "react";
import styles from "./Cta.module.css";
// import newlogo from '../../assets/newlogo.png';

const Cta: React.FC = () => {
  const ctaRef = useRef(null); // Reference to the div
  const [isInView, setIsInView] = useState(false); // State to track if the section is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // If the section is intersecting (visible in the viewport), set isInView to true
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust this threshold to when you want the class to be applied
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current); // Start observing the ref
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current); // Clean up the observer on component unmount
      }
    };
  }, []);

  return (
    <>
      <div
        className={
          isInView
            ? `${styles.cta} ${styles.zoom} ${styles["tracking-in-expand"]}`
            : `${styles.cta} ${styles.zoom}`
        }
        ref={ctaRef}
      >
        <div className={styles.title}>
          GET <span className={styles.blue}>CLOSER</span> TO YOUR{" "}
          <span className={styles.blue}>DREAMS</span>
        </div>

        <div className={styles.subtitle}>WHAT ARE YOU WAITING FOR?</div>

        <div className={styles.cta_button}>
          <div className="cta">
            <a href="/getintouch" className="navLink learnMore">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="buttonText">GET IN TOUCH</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
