"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CareersFirstSection_1 = __importDefault(require("../../components/CareersFirstSection/CareersFirstSection"));
const SendCVForm_1 = __importDefault(require("../../components/SendCVForm/SendCVForm"));
const Cta_1 = __importDefault(require("../../components/cta/Cta"));
const Careers = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)(CareersFirstSection_1.default, {}), (0, jsx_runtime_1.jsx)(SendCVForm_1.default, {})] }), (0, jsx_runtime_1.jsx)(Cta_1.default, {})] }));
};
exports.default = Careers;
//# sourceMappingURL=Careers.js.map