"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TeamMember_module_css_1 = __importDefault(require("./TeamMember.module.css"));
const TeamMember = ({ imageSource, name, role, alt }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: TeamMember_module_css_1.default.teamMember, children: [(0, jsx_runtime_1.jsx)("img", { src: imageSource, alt: alt, className: TeamMember_module_css_1.default.teamImage }), (0, jsx_runtime_1.jsx)("h2", { className: TeamMember_module_css_1.default.teamName, children: name }), (0, jsx_runtime_1.jsx)("p", { className: TeamMember_module_css_1.default.teamRole, children: role })] }));
};
exports.default = TeamMember;
//# sourceMappingURL=TeamMember.js.map