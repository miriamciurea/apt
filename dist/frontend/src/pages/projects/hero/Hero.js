"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Hero_module_css_1 = __importDefault(require("./Hero.module.css"));
const Hero = () => {
    return ((0, jsx_runtime_1.jsxs)("header", { className: Hero_module_css_1.default.header, children: [(0, jsx_runtime_1.jsxs)("div", { className: Hero_module_css_1.default.title, children: ["OUR ", (0, jsx_runtime_1.jsx)("span", { children: "PROJECTS" })] }), (0, jsx_runtime_1.jsxs)("div", { className: Hero_module_css_1.default.subtitle, children: ["We believe in the power of ", (0, jsx_runtime_1.jsx)("strong", { children: "strong partnerships" }), ". ", (0, jsx_runtime_1.jsx)("u", { children: "Every" }), " ", (0, jsx_runtime_1.jsx)("span", { children: "collaboration" }), ", no matter the scale, is treated ", (0, jsx_runtime_1.jsx)("strong", { children: "with the utmost care and respect" }), "."] })] }));
};
exports.default = Hero;
//# sourceMappingURL=Hero.js.map