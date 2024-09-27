import { jsx as _jsx } from "react/jsx-runtime";
// import { useEffect, useRef, useState } from "react";
import styles from "./ScrollingText.module.css";
const ScrollingText = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const centerPosition = window.innerWidth / 2;
    // const textRef = useRef<HTMLParagraphElement>(null);
    // const handleScroll = () => {
    //   const position = window.scrollY;
    //   setScrollPosition(position);
    // };
    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll);
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll); // Cleanup listener on component unmount
    //   };
    // }, []);
    // const centerOfText = (textRef.current ? textRef.current.offsetWidth : 0) / 2;
    // const textPosition = Math.min(
    //   scrollPosition - 1000,
    //   centerPosition - centerOfText - 15
    // );
    return (_jsx("div", { className: styles.scrollingContainer, children: _jsx("p", { className: styles.scrollingText, children: "REVIEWS FROM OUR CLIENTS" }) }));
};
export default ScrollingText;
