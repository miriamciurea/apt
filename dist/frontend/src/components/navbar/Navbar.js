"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom"); // Import Link from react-router-dom
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css"));
const newlogo_png_1 = __importDefault(require("../../assets/newlogo.png"));
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { className: Navbar_module_css_1.default.navbar, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: Navbar_module_css_1.default.logoLink, children: (0, jsx_runtime_1.jsx)("img", { src: newlogo_png_1.default, alt: "logo", className: Navbar_module_css_1.default.logo }) }), (0, jsx_runtime_1.jsx)("div", { className: Navbar_module_css_1.default.menuIcon, onClick: toggleMenu, children: (0, jsx_runtime_1.jsx)("i", { className: "fas fa-bars" }) }), (0, jsx_runtime_1.jsxs)("ul", { className: `${Navbar_module_css_1.default.navList} ${isMenuOpen ? Navbar_module_css_1.default.showMenu : ''}`, children: [(0, jsx_runtime_1.jsx)("li", { className: Navbar_module_css_1.default.navItem, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/about", className: `${Navbar_module_css_1.default.navLink} ${Navbar_module_css_1.default.learnMore}`, children: [(0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.circle, "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("span", { className: `${Navbar_module_css_1.default.icon} ${Navbar_module_css_1.default.arrow}` }) }), (0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.buttonText, children: "ABOUT US" })] }) }), (0, jsx_runtime_1.jsx)("li", { className: Navbar_module_css_1.default.navItem, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/careers", className: `${Navbar_module_css_1.default.navLink} ${Navbar_module_css_1.default.learnMore}`, children: [(0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.circle, "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("span", { className: `${Navbar_module_css_1.default.icon} ${Navbar_module_css_1.default.arrow}` }) }), (0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.buttonText, children: "CAREERS" })] }) }), (0, jsx_runtime_1.jsx)("li", { className: Navbar_module_css_1.default.navItem, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/projects", className: `${Navbar_module_css_1.default.navLink} ${Navbar_module_css_1.default.learnMore}`, children: [(0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.circle, "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("span", { className: `${Navbar_module_css_1.default.icon} ${Navbar_module_css_1.default.arrow}` }) }), (0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.buttonText, children: "PROJECTS" })] }) }), (0, jsx_runtime_1.jsx)("li", { className: Navbar_module_css_1.default.navItem, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/getintouch", className: `${Navbar_module_css_1.default.navLink} ${Navbar_module_css_1.default.learnMore}`, children: [(0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.circle, "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("span", { className: `${Navbar_module_css_1.default.icon} ${Navbar_module_css_1.default.arrow}` }) }), (0, jsx_runtime_1.jsx)("span", { className: Navbar_module_css_1.default.buttonText, children: "GET IN TOUCH" })] }) })] })] }));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map