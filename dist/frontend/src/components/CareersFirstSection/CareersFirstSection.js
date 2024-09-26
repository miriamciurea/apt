"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CareersFirstSection_module_css_1 = __importDefault(require("./CareersFirstSection.module.css"));
const items = [
    { name: "INNOVATIVE AND IMPACTFUL WORK" },
    { name: "COMMITMENT TO WORK-LIFE BALANCE" },
    { name: "COLLABORATIVE AND SUPPORTIVE ENVIRONMENT" },
    { name: "A CULTURE OF RESPECT AND INTEGRITY" },
    { name: "OPPORTUNITIES FOR GROWTH AND DEVELOPMENT" },
    { name: "A CHANCE TO MAKE A DIFFERENCE" },
];
const CareersFirstSection = () => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: CareersFirstSection_module_css_1.default.container, children: [(0, jsx_runtime_1.jsxs)("h1", { className: CareersFirstSection_module_css_1.default.title, children: ["THRILLED TO WELCOME ", (0, jsx_runtime_1.jsx)("span", { className: CareersFirstSection_module_css_1.default.highlight, children: "YOU" }), " TO", " ", (0, jsx_runtime_1.jsx)("span", { className: CareersFirstSection_module_css_1.default.underlined, children: "OUR TEAM" })] }), (0, jsx_runtime_1.jsx)("h2", { className: CareersFirstSection_module_css_1.default.subTitle, children: "WHY JOIN US?" }), (0, jsx_runtime_1.jsxs)("div", { className: CareersFirstSection_module_css_1.default.reasonsContainer, children: [(0, jsx_runtime_1.jsx)("div", { children: items.map((item) => {
                                return ((0, jsx_runtime_1.jsx)("div", { className: CareersFirstSection_module_css_1.default.agCoursesItem, children: (0, jsx_runtime_1.jsxs)("div", { className: CareersFirstSection_module_css_1.default.agCoursesItemLink, children: [(0, jsx_runtime_1.jsx)("div", { className: CareersFirstSection_module_css_1.default.agCoursesItemBg }), (0, jsx_runtime_1.jsx)("div", { className: CareersFirstSection_module_css_1.default.agCoursesItemTitle, children: item.name })] }) }));
                            }) }), (0, jsx_runtime_1.jsx)("div", { className: CareersFirstSection_module_css_1.default.imageContainer })] })] }) }));
};
exports.default = CareersFirstSection;
//# sourceMappingURL=CareersFirstSection.js.map