"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TeamMember_1 = __importDefault(require("../TeamMember/TeamMember"));
const Team_module_css_1 = __importDefault(require("./Team.module.css"));
const teamMembers = [
    {
        name: "Jane Doe",
        alt: "Jane Doe",
        role: "Operations Director",
        img: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Mike Ethan",
        alt: "Mike Ethan",
        role: "Operations Manager",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Robert Cliford",
        alt: "Robert Cliford",
        role: "Project Manager",
        img: "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
const Team = () => {
    return ((0, jsx_runtime_1.jsxs)("section", { className: Team_module_css_1.default.teamSection, children: [(0, jsx_runtime_1.jsx)("h1", { className: Team_module_css_1.default.teamTitle, children: "Meet the Team" }), (0, jsx_runtime_1.jsx)("div", { className: Team_module_css_1.default.teamContainer, children: teamMembers.map((member) => {
                    return ((0, jsx_runtime_1.jsx)(TeamMember_1.default, { imageSource: member.img, alt: member.alt, name: member.name, role: member.role }));
                }) })] }));
};
exports.default = Team;
//# sourceMappingURL=Team.js.map