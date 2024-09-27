"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Hero_module_css_1 = __importDefault(require("./Hero.module.css"));
const autumn_mp4_1 = __importDefault(require("../../assets/autumn.mp4"));
const Hero = () => {
    console.log('Styles object:', Hero_module_css_1.default);
    const videoRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1; // Adjust the playback rate (0.5 is 50% speed)
        }
    }, []);
    return ((0, jsx_runtime_1.jsxs)("section", { className: Hero_module_css_1.default.hero, children: [(0, jsx_runtime_1.jsx)("video", { src: autumn_mp4_1.default, autoPlay: true, loop: true, muted: true, className: Hero_module_css_1.default.video, ref: videoRef }), (0, jsx_runtime_1.jsx)("div", { className: Hero_module_css_1.default.overlay }), (0, jsx_runtime_1.jsx)("div", { className: Hero_module_css_1.default.logoContainer }), (0, jsx_runtime_1.jsxs)("div", { className: Hero_module_css_1.default.content, children: [(0, jsx_runtime_1.jsxs)("h1", { className: Hero_module_css_1.default.title, children: [(0, jsx_runtime_1.jsx)("span", { className: Hero_module_css_1.default.innovative, children: "INNOVATIVE" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { className: Hero_module_css_1.default.railway, children: "RAILWAY" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { className: Hero_module_css_1.default.fibre, children: " & FIBRE" })] }), (0, jsx_runtime_1.jsxs)("a", { href: "/about", className: Hero_module_css_1.default.cta, style: { paddingLeft: '0px' }, children: ["Learn More", (0, jsx_runtime_1.jsxs)("span", { className: Hero_module_css_1.default.chevrons, children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" }), (0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" })] })] }), (0, jsx_runtime_1.jsxs)("a", { href: "/careers", className: Hero_module_css_1.default.cta, children: ["Join Our Team", (0, jsx_runtime_1.jsxs)("span", { className: Hero_module_css_1.default.chevrons, children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" }), (0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" })] })] })] })] }));
};
exports.default = Hero;
//# sourceMappingURL=Hero.js.map