"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import { useEffect, useRef, useState } from "react";
const ScrollingText_module_css_1 = __importDefault(require("./ScrollingText.module.css"));
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
    return ((0, jsx_runtime_1.jsx)("div", { className: ScrollingText_module_css_1.default.scrollingContainer, children: (0, jsx_runtime_1.jsx)("p", { className: ScrollingText_module_css_1.default.scrollingText, children: "REVIEWS FROM OUR CLIENTS" }) }));
};
exports.default = ScrollingText;
//# sourceMappingURL=ScrollingText.js.map