import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import styles from "./Cta.module.css";
// import newlogo from '../../assets/newlogo.png';
const Cta = () => {
    const ctaRef = useRef(null); // Reference to the div
    const [isInView, setIsInView] = useState(false); // State to track if the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // If the section is intersecting (visible in the viewport), set isInView to true
            setIsInView(entry.isIntersecting);
        }, {
            threshold: 0.5, // Adjust this threshold to when you want the class to be applied
        });
        if (ctaRef.current) {
            observer.observe(ctaRef.current); // Start observing the ref
        }
        return () => {
            if (ctaRef.current) {
                observer.unobserve(ctaRef.current); // Clean up the observer on component unmount
            }
        };
    }, []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: isInView
                ? `${styles.cta} ${styles.zoom} ${styles["tracking-in-expand"]}`
                : `${styles.cta} ${styles.zoom}`, ref: ctaRef, children: [_jsxs("div", { className: styles.title, children: ["GET ", _jsx("span", { className: styles.blue, children: "CLOSER" }), " TO YOUR", " ", _jsx("span", { className: styles.blue, children: "DREAMS" })] }), _jsx("div", { className: styles.subtitle, children: "WHAT ARE YOU WAITING FOR?" }), _jsx("div", { className: styles.cta_button, children: _jsx("div", { className: "cta", children: _jsxs("a", { href: "/getintouch", className: "navLink learnMore", children: [_jsx("span", { className: "circle", "aria-hidden": "true", children: _jsx("span", { className: "icon arrow" }) }), _jsx("span", { className: "buttonText", children: "GET IN TOUCH" })] }) }) })] }) }));
};
export default Cta;
