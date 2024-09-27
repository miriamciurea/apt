"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Review_module_css_1 = __importDefault(require("./Review.module.css"));
const Review = ({ name, src, alt, companyName, text }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: Review_module_css_1.default.reviewInstance, children: [(0, jsx_runtime_1.jsx)("img", { src: src, alt: alt, className: Review_module_css_1.default.reviewImage }), (0, jsx_runtime_1.jsx)("p", { className: Review_module_css_1.default.clientName, children: name }), (0, jsx_runtime_1.jsx)("p", { className: Review_module_css_1.default.companyName, children: companyName }), (0, jsx_runtime_1.jsx)("hr", { className: Review_module_css_1.default.reviewLine }), (0, jsx_runtime_1.jsx)("div", { className: Review_module_css_1.default.reviewText, children: (0, jsx_runtime_1.jsx)("p", { children: text }) })] }));
};
exports.default = Review;
//# sourceMappingURL=Review.js.map