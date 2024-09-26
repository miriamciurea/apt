"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Domain_module_css_1 = __importDefault(require("./Domain.module.css"));
const electric_json_1 = __importDefault(require("../../lotties/electric.json"));
const train_json_1 = __importDefault(require("../../lotties/train.json"));
const construction_json_1 = __importDefault(require("../../lotties/construction.json"));
const LottieAnimation_1 = __importDefault(require("../dotie/LottieAnimation"));
const Domain = () => {
    const icons = [
        {
            component: (0, jsx_runtime_1.jsx)(LottieAnimation_1.default, { animation: construction_json_1.default }),
            subtitle: "CONSTRUCTION",
            description: "Constructing tommorow with expertise.",
        },
        {
            component: (0, jsx_runtime_1.jsx)(LottieAnimation_1.default, { animation: train_json_1.default }),
            subtitle: "CIVIL - RAIL",
            description: "Reliable Rail-Civil infrastructure. ",
        },
        {
            component: (0, jsx_runtime_1.jsx)(LottieAnimation_1.default, { animation: electric_json_1.default }),
            subtitle: "UTILITY | POWER",
            description: "Empowering your grid, sustainably.",
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: Domain_module_css_1.default.container, children: [(0, jsx_runtime_1.jsxs)("div", { className: Domain_module_css_1.default.title, children: ["CONNECTING ", (0, jsx_runtime_1.jsx)("span", { className: Domain_module_css_1.default.highlight, children: "UK" }), "'S FUTURE"] }), (0, jsx_runtime_1.jsx)("div", { className: Domain_module_css_1.default.iconsContainer, children: icons.map((icon, index) => ((0, jsx_runtime_1.jsxs)("div", { className: `${Domain_module_css_1.default.iconBlock} ${index === 0 ? Domain_module_css_1.default.firstIcon : ""}`, children: [(0, jsx_runtime_1.jsx)("div", { className: index === 0 ? Domain_module_css_1.default.clipContainer : "", children: icon.component }), (0, jsx_runtime_1.jsx)("h3", { className: Domain_module_css_1.default.subtitle, children: icon.subtitle }), (0, jsx_runtime_1.jsx)("p", { className: Domain_module_css_1.default.description, children: icon.description })] }, index))) })] }));
};
exports.default = Domain;
//# sourceMappingURL=Domain.js.map