import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/not-found/NotFound";
import Careers from "./pages/Careers/Careers";
import Projects from "./pages/projects/Projects";
import ProjectShow from "./pages/projects/ProjectShow";
import Copyright from "./components/copyright/Copyright";
import ContactUs from "./pages/ContactUs/ContactUs";
const App = function () {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx("div", { className: "container", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/copyright", element: _jsx(Copyright, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/careers", element: _jsx(Careers, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/projects/:id", element: _jsx(ProjectShow, {}) }), _jsx(Route, { path: "/getintouch", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }), _jsx(Footer, {})] }));
};
export default App;
