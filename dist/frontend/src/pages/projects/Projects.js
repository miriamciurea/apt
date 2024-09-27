"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Projects_module_css_1 = __importDefault(require("./Projects.module.css"));
const Hero_1 = __importDefault(require("./hero/Hero"));
require("animate.css");
const Projects = () => {
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [filteredProjects, setFilteredProjects] = (0, react_1.useState)([]);
    const [selectedSector, setSelectedSector] = (0, react_1.useState)('All');
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const [animationClass, setAnimationClass] = (0, react_1.useState)(''); // State to manage animation class
    (0, react_1.useEffect)(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
            setProjects(data);
            setFilteredProjects(data);
        })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);
    const handleSectorChange = (event) => {
        const sector = event.target.value;
        setSelectedSector(sector);
        if (sector === 'All') {
            setFilteredProjects(projects);
        }
        else {
            const filtered = projects.filter(project => project.sector === sector);
            setFilteredProjects(filtered);
        }
        // Reset current index when filtering
        setCurrentIndex(0);
    };
    const handleNext = () => {
        // Start the "exit" animation
        setAnimationClass('animate__animated animate__backOutDown');
        // Wait for the animation to complete before changing the project
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
            setAnimationClass('animate__animated animate__backInDown'); // Start the "enter" animation
        }, 500); // Adjust the timeout to match the animation duration
    };
    const handlePrev = () => {
        // Start the "exit" animation
        setAnimationClass('animate__animated animate__backOutDown');
        // Wait for the animation to complete before changing the project
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
            setAnimationClass('animate__animated animate__backInDown'); // Start the "enter" animation
        }, 500); // Adjust the timeout to match the animation duration
    };
    const currentProject = filteredProjects[currentIndex];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: Projects_module_css_1.default.containerProjects, children: [(0, jsx_runtime_1.jsxs)("div", { className: Projects_module_css_1.default.filterContainer, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "sector-select", children: "SELECT BY SECTOR:" }), (0, jsx_runtime_1.jsxs)("select", { id: "sector-select", value: selectedSector, onChange: handleSectorChange, className: Projects_module_css_1.default.select, children: [(0, jsx_runtime_1.jsx)("option", { value: "All", children: "ALL SECTORS" }), (0, jsx_runtime_1.jsx)("option", { value: "Construction", children: "CONSTRUCTION" }), (0, jsx_runtime_1.jsx)("option", { value: "Optic Fiber", children: "OPTIC FIBER" }), (0, jsx_runtime_1.jsx)("option", { value: "Rails", children: "RAILS" })] })] }), currentProject && ((0, jsx_runtime_1.jsxs)("div", { className: `${Projects_module_css_1.default.projectDisplay} ${animationClass}`, onAnimationEnd: () => setAnimationClass(''), children: [(0, jsx_runtime_1.jsxs)("div", { className: Projects_module_css_1.default.projectInfo, children: [(0, jsx_runtime_1.jsx)("h2", { children: currentProject.name }), (0, jsx_runtime_1.jsx)("p", { children: currentProject.location })] }), (0, jsx_runtime_1.jsx)("div", { className: Projects_module_css_1.default.projectImage, style: {
                                    backgroundImage: `url(${currentProject.photos[0]})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                } }), (0, jsx_runtime_1.jsxs)("div", { className: Projects_module_css_1.default.side, children: [(0, jsx_runtime_1.jsxs)("div", { className: Projects_module_css_1.default.projectCounter, children: [currentIndex + 1, " / ", filteredProjects.length] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/projects/${currentProject.id}`, className: Projects_module_css_1.default.readMoreButton, children: "view project" }), (0, jsx_runtime_1.jsxs)("div", { className: Projects_module_css_1.default.navigation, children: [(0, jsx_runtime_1.jsxs)("button", { onClick: handlePrev, children: [(0, jsx_runtime_1.jsx)("span", { className: "material-symbols-outlined", style: { color: `#2877CE` }, children: "keyboard_double_arrow_left" }), " PREV"] }), (0, jsx_runtime_1.jsxs)("button", { onClick: handleNext, children: ["NEXT ", (0, jsx_runtime_1.jsx)("span", { className: "material-symbols-outlined", style: { color: `#2877CE` }, children: "double_arrow" })] })] })] })] }))] })] }));
};
exports.default = Projects;
//# sourceMappingURL=Projects.js.map