"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_module_css_1 = __importDefault(require("./Icon.module.css"));
const Icon = ({ Component, text }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: Icon_module_css_1.default.iconContainer, children: [(0, jsx_runtime_1.jsx)("div", { className: Icon_module_css_1.default.icon, children: Component }), (0, jsx_runtime_1.jsx)("hr", { className: Icon_module_css_1.default.underline }), (0, jsx_runtime_1.jsx)("p", { className: Icon_module_css_1.default.iconText, children: text })] }));
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map