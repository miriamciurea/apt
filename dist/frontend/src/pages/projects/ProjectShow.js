"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const ProjectShow_module_css_1 = __importDefault(require("./ProjectShow.module.css"));
const ProjectShow = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const [project, setProject] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
            const projectData = data.find((proj) => proj.id === parseInt(id));
            setProject(projectData);
        })
            .catch(error => console.error('Error fetching project:', error));
    }, [id]);
    // Utility function to format the description
    const formatDescription = (description) => {
        return description.split('\n').map((text, index) => {
            // Add highlights to specific keywords
            if (text.includes('Scope of Work:') || text.includes('Key Stats:')) {
                return ((0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("strong", { children: text }) }, index));
            }
            return (0, jsx_runtime_1.jsx)("p", { children: text }, index);
        });
    };
    if (!project) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: ProjectShow_module_css_1.default.container, children: [(0, jsx_runtime_1.jsx)("div", { className: ProjectShow_module_css_1.default.titleSection, children: (0, jsx_runtime_1.jsx)("h1", { children: project.name }) }), (0, jsx_runtime_1.jsxs)("div", { className: ProjectShow_module_css_1.default.detailsSection, children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { className: ProjectShow_module_css_1.default.label, children: "Location:" }), (0, jsx_runtime_1.jsx)("span", { className: ProjectShow_module_css_1.default.value, children: project.location })] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { className: ProjectShow_module_css_1.default.label, children: "Completion Date:" }), (0, jsx_runtime_1.jsx)("span", { className: ProjectShow_module_css_1.default.value, children: project.completionDate })] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { className: ProjectShow_module_css_1.default.label, children: "Sector:" }), (0, jsx_runtime_1.jsx)("span", { className: ProjectShow_module_css_1.default.value, children: project.sector })] })] }), (0, jsx_runtime_1.jsx)("div", { className: ProjectShow_module_css_1.default.descriptionSection, children: formatDescription(project.description) }), (0, jsx_runtime_1.jsx)("div", { className: ProjectShow_module_css_1.default.sliderSection, children: (0, jsx_runtime_1.jsx)("div", { className: ProjectShow_module_css_1.default.photoGallery, children: project.photos.map((photo, index) => ((0, jsx_runtime_1.jsx)("img", { src: photo, alt: `Project ${project.name} - ${index}` }, index))) }) })] }));
};
exports.default = ProjectShow;
//# sourceMappingURL=ProjectShow.js.map