import { useEffect, useRef, useState } from "react";
import styles from "./ScrollingText.module.css";

const ScrollingText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const centerPosition = window.innerWidth / 2;
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on component unmount
    };
  }, []);

  const centerOfText = (textRef.current ? textRef.current.offsetWidth : 0) / 2;

  const textPosition = Math.min(
    scrollPosition - 1000,
    centerPosition - centerOfText - 15
  );

  return (
    <div className={styles.scrollingContainer}>
      <p
        className={styles.scrollingText}
        style={{
          transform: `translateX(${textPosition}px)`, // Move text based on scroll position
        }}
        ref={textRef}
      >
        REVIEWS FROM OUR CLIENTS
      </p>
    </div>
  );
};

export default ScrollingText;
