"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ContactUsHeader_module_css_1 = __importDefault(require("./ContactUsHeader.module.css"));
const ContactUsHeader = () => {
    return ((0, jsx_runtime_1.jsxs)("header", { className: ContactUsHeader_module_css_1.default.header, children: [(0, jsx_runtime_1.jsx)("h1", { className: ContactUsHeader_module_css_1.default.title, children: "WORK WITH US" }), (0, jsx_runtime_1.jsxs)("a", { href: "/join-our-team", className: ContactUsHeader_module_css_1.default.cta, children: ["Join Our Team", (0, jsx_runtime_1.jsxs)("span", { className: ContactUsHeader_module_css_1.default.chevrons, children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" }), (0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-right" })] })] })] }));
};
exports.default = ContactUsHeader;
//# sourceMappingURL=ContactUsHeader.js.map