"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./components/navbar/Navbar"));
const Footer_1 = __importDefault(require("./components/footer/Footer"));
const Home_1 = __importDefault(require("./pages/home/Home"));
const About_1 = __importDefault(require("./pages/about/About"));
const NotFound_1 = __importDefault(require("./pages/not-found/NotFound"));
const Careers_1 = __importDefault(require("./pages/Careers/Careers"));
const Projects_1 = __importDefault(require("./pages/projects/Projects"));
const ProjectShow_1 = __importDefault(require("./pages/projects/ProjectShow"));
const Copyright_1 = __importDefault(require("./components/copyright/Copyright"));
const ContactUs_1 = __importDefault(require("./pages/ContactUs/ContactUs"));
const App = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/copyright", element: (0, jsx_runtime_1.jsx)(Copyright_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", element: (0, jsx_runtime_1.jsx)(About_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/careers", element: (0, jsx_runtime_1.jsx)(Careers_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects", element: (0, jsx_runtime_1.jsx)(Projects_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:id", element: (0, jsx_runtime_1.jsx)(ProjectShow_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/getintouch", element: (0, jsx_runtime_1.jsx)(ContactUs_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = App;
//# sourceMappingURL=App.js.map