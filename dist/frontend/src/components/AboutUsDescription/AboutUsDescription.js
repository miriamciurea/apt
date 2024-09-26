"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AboutUsDescription_module_css_1 = __importDefault(require("./AboutUsDescription.module.css"));
const Icon_1 = __importDefault(require("./Icon/Icon"));
const fa_1 = require("react-icons/fa");
const fi_1 = require("react-icons/fi");
const fa_2 = require("react-icons/fa");
const fa_3 = require("react-icons/fa");
const md_1 = require("react-icons/md");
const icons = [
    { iconComponent: (0, jsx_runtime_1.jsx)(fa_1.FaLightbulb, {}), text: "Innovation" },
    { iconComponent: (0, jsx_runtime_1.jsx)(fa_3.FaLeaf, {}), text: "Sustainabillity" },
    {
        iconComponent: (0, jsx_runtime_1.jsx)(fi_1.FiCheckCircle, { className: AboutUsDescription_module_css_1.default.icon }),
        text: "Certified",
    },
    {
        iconComponent: (0, jsx_runtime_1.jsx)(md_1.MdDiversity3, { className: AboutUsDescription_module_css_1.default.icon }),
        text: "Inclusive",
    },
    {
        iconComponent: (0, jsx_runtime_1.jsx)(fa_2.FaHardHat, { className: AboutUsDescription_module_css_1.default.icon }),
        text: "Safety",
    },
];
const AboutUsDescription = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: AboutUsDescription_module_css_1.default.descriptionContainer, children: [(0, jsx_runtime_1.jsxs)("div", { className: AboutUsDescription_module_css_1.default.introContainer, children: [(0, jsx_runtime_1.jsxs)("h1", { className: AboutUsDescription_module_css_1.default.title, children: ["WELCOME TO ", (0, jsx_runtime_1.jsx)("span", { className: AboutUsDescription_module_css_1.default.highlight, children: "APT" })] }), (0, jsx_runtime_1.jsxs)("p", { className: AboutUsDescription_module_css_1.default.text, children: ["For ", (0, jsx_runtime_1.jsx)("span", { className: AboutUsDescription_module_css_1.default.highlight, children: "20" }), " years, we've specialized in ", (0, jsx_runtime_1.jsx)("span", { className: AboutUsDescription_module_css_1.default.underlined, children: "rail" }), " and", " ", (0, jsx_runtime_1.jsx)("span", { className: AboutUsDescription_module_css_1.default.underlined, children: "fiber construction" }), " ", "projects, delivering high-quality, reliable solutions. Our experienced team is dedicated to excellence and innovation, prioritizing the well-being and professional growth of our staff.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), " At APT, we pride ourselves on our", " ", (0, jsx_runtime_1.jsx)("span", { className: AboutUsDescription_module_css_1.default.underlined, children: "commitment to safety" }), ",", " ", (0, jsx_runtime_1.jsx)("span", { className: AboutUsDescription_module_css_1.default.underlined, children: "quality" }), ", and", " ", (0, jsx_runtime_1.jsx)("span", { className: AboutUsDescription_module_css_1.default.underlined, children: "customer satisfaction" }), "."] })] }), (0, jsx_runtime_1.jsx)("div", { className: AboutUsDescription_module_css_1.default.iconsContainer, children: icons.map((icon) => ((0, jsx_runtime_1.jsx)(Icon_1.default, { Component: icon.iconComponent, text: icon.text }))) })] }));
};
exports.default = AboutUsDescription;
//# sourceMappingURL=AboutUsDescription.js.map