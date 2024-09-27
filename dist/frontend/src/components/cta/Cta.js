"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Cta_module_css_1 = __importDefault(require("./Cta.module.css"));
// import newlogo from '../../assets/newlogo.png';
const Cta = () => {
    const ctaRef = (0, react_1.useRef)(null); // Reference to the div
    const [isInView, setIsInView] = (0, react_1.useState)(false); // State to track if the section is in view
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: isInView
                ? `${Cta_module_css_1.default.cta} ${Cta_module_css_1.default.zoom} ${Cta_module_css_1.default["tracking-in-expand"]}`
                : `${Cta_module_css_1.default.cta} ${Cta_module_css_1.default.zoom}`, ref: ctaRef, children: [(0, jsx_runtime_1.jsxs)("div", { className: Cta_module_css_1.default.title, children: ["GET ", (0, jsx_runtime_1.jsx)("span", { className: Cta_module_css_1.default.blue, children: "CLOSER" }), " TO YOUR", " ", (0, jsx_runtime_1.jsx)("span", { className: Cta_module_css_1.default.blue, children: "DREAMS" })] }), (0, jsx_runtime_1.jsx)("div", { className: Cta_module_css_1.default.subtitle, children: "WHAT ARE YOU WAITING FOR?" }), (0, jsx_runtime_1.jsx)("div", { className: Cta_module_css_1.default.cta_button, children: (0, jsx_runtime_1.jsx)("div", { className: "cta", children: (0, jsx_runtime_1.jsxs)("a", { href: "/getintouch", className: "navLink learnMore", children: [(0, jsx_runtime_1.jsx)("span", { className: "circle", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("span", { className: "icon arrow" }) }), (0, jsx_runtime_1.jsx)("span", { className: "buttonText", children: "GET IN TOUCH" })] }) }) })] }) }));
};
exports.default = Cta;
//# sourceMappingURL=Cta.js.map