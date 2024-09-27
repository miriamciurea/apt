"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const aboutHeader_module_css_1 = __importDefault(require("./aboutHeader.module.css"));
const AboutHeader = () => {
    return ((0, jsx_runtime_1.jsxs)("header", { className: aboutHeader_module_css_1.default.header, children: [(0, jsx_runtime_1.jsx)("h1", { className: aboutHeader_module_css_1.default.title, children: "About Us" }), (0, jsx_runtime_1.jsxs)("a", { href: "/join-our-team", className: aboutHeader_module_css_1.default.cta, children: ["Join Our Team", (0, jsx_runtime_1.jsxs)("span", { className: aboutHeader_module_css_1.default.chevrons, children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" }), (0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" })] })] })] }));
};
exports.default = AboutHeader;
//# sourceMappingURL=aboutHeader.js.map