"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ContactUsForm_1 = __importDefault(require("../../components/ContactUsForm/ContactUsForm"));
const ContactUsHeader_1 = __importDefault(require("../../components/ContactUsHeader/ContactUsHeader"));
const ContactUs = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ContactUsHeader_1.default, {}), (0, jsx_runtime_1.jsx)(ContactUsForm_1.default, {})] }));
};
exports.default = ContactUs;
//# sourceMappingURL=ContactUs.js.map