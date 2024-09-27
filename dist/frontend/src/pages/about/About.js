"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const EarlyDays_1 = __importDefault(require("../../components/early-days/EarlyDays"));
const AboutUsDescription_1 = __importDefault(require("../../components/AboutUsDescription/AboutUsDescription"));
const Team_1 = __importDefault(require("../../components/Team/Team"));
const aboutHeader_1 = __importDefault(require("../../components/about-header/aboutHeader"));
const LeftHeader_1 = __importDefault(require("../../components/left-header/LeftHeader"));
const Cta_1 = __importDefault(require("../../components/cta/Cta"));
const About = () => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)(aboutHeader_1.default, {}), (0, jsx_runtime_1.jsx)(AboutUsDescription_1.default, {}), (0, jsx_runtime_1.jsx)(EarlyDays_1.default, {}), (0, jsx_runtime_1.jsx)(Team_1.default, {}), (0, jsx_runtime_1.jsx)(LeftHeader_1.default, {}), (0, jsx_runtime_1.jsx)(Cta_1.default, {})] }) }));
};
exports.default = About;
//# sourceMappingURL=About.js.map