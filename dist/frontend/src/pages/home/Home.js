"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Hero_1 = __importDefault(require("../../components/navbar/Hero"));
const Reviews_1 = __importDefault(require("../../components/reviews/Reviews"));
const HomeProjects_1 = __importDefault(require("../../components/home-projects/HomeProjects"));
const Slider_1 = __importDefault(require("../../components/slider-image/Slider"));
const Loop_1 = __importDefault(require("../../components/loop/Loop"));
const Domain_1 = __importDefault(require("../../components/domains/Domain"));
const CompanyValues_1 = __importDefault(require("../../components/company-values/CompanyValues"));
const Cta_1 = __importDefault(require("../../components/cta/Cta"));
const Home = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)(Domain_1.default, {}), (0, jsx_runtime_1.jsx)(HomeProjects_1.default, {}), (0, jsx_runtime_1.jsx)(Loop_1.default, {}), (0, jsx_runtime_1.jsx)(Slider_1.default, {}), (0, jsx_runtime_1.jsx)(CompanyValues_1.default, {}), (0, jsx_runtime_1.jsx)(Reviews_1.default, {}), (0, jsx_runtime_1.jsx)(Cta_1.default, {})] })] }));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map