"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const HomeProjects_module_css_1 = __importDefault(require("./HomeProjects.module.css")); // Adjust path as necessary
const HomeProjects = () => {
    // New projects from JSON data (first 5)
    const newProjects = [
        {
            src: "/images/lof2.JPG", // Assuming you're hosting your images
            alt: "Lowestoft Fibre Network",
            info: "Fibre Network | Lowestoft, UK"
        },
        {
            src: "/images/n2.jpeg",
            alt: "NWEP Phase 3 Cable Containment",
            info: "NWEP Cable Containment | Manchester – Euxton Jcn"
        },
        {
            src: "/images/f2.jpeg",
            alt: "North West Electrification Boundary Fencing",
            info: "NW Fencing | Blackpool - Preston"
        },
        {
            src: "/images/sw1.jpeg",
            alt: "Switching Access and Stairways",
            info: "Switching Access and Stairways | Blackpool, UK"
        },
        {
            src: "/images/b1.jpeg",
            alt: "Blackpool Lighting Walkway",
            info: "Blackpool Lighting Walkway | Blackpool"
        }
    ];
    // Existing hardcoded projects (remaining ones)
    const oldProjects = [
        {
            src: "https://images.unsplash.com/photo-1593630265256-d2cc162ab58f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3R1Y3Rpb24lMjBzaXRlfGVufDB8fDB8fHwy",
            alt: "Construction Site",
            info: "Build Works | US"
        },
        {
            src: "https://images.unsplash.com/photo-1680879221403-f19bb46fe527?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaWx3YXklMjB3b3JrZXJzfGVufDB8fDB8fHwy",
            alt: "Railway Workers",
            info: "Railway Project | Germany"
        },
        {
            src: "https://images.unsplash.com/photo-1712233462849-7db3060ba1f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbHdheSUyMHdvcmtlcnN8ZW58MHwxfDB8fHwy",
            alt: "Railway Construction",
            info: "Railway Works | Japan"
        },
        {
            src: "https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3R1Y3Rpb24lMjBzaXRlfGVufDB8fDB8fHwy",
            alt: "Construction",
            info: "Skyline Projects | UAE"
        }
    ];
    // Merge the new projects with the remaining old projects
    const projects = [...newProjects, ...oldProjects];
    const [offsetX, setOffsetX] = (0, react_1.useState)(0);
    const [offsetY, setOffsetY] = (0, react_1.useState)(0);
    const projectsRef = (0, react_1.useRef)(null);
    const requestRef = (0, react_1.useRef)(null);
    const handleScroll = () => {
        if (projectsRef.current) {
            const scrollLeft = projectsRef.current.scrollLeft;
            const scrollTop = projectsRef.current.scrollTop;
            if (requestRef.current !== null) {
                cancelAnimationFrame(requestRef.current);
            }
            requestRef.current = requestAnimationFrame(() => {
                setOffsetX(scrollLeft);
                setOffsetY(scrollTop);
            });
        }
    };
    (0, react_1.useEffect)(() => {
        const container = projectsRef.current;
        container === null || container === void 0 ? void 0 : container.addEventListener('scroll', handleScroll);
        return () => {
            container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', handleScroll);
            if (requestRef.current !== null) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: HomeProjects_module_css_1.default.container, children: [(0, jsx_runtime_1.jsx)("div", { className: HomeProjects_module_css_1.default.title, children: "FEATURED PROJECTS" }), (0, jsx_runtime_1.jsx)("div", { className: HomeProjects_module_css_1.default.projects, ref: projectsRef, children: projects.map((project, index) => ((0, jsx_runtime_1.jsxs)("div", { className: HomeProjects_module_css_1.default.project, children: [(0, jsx_runtime_1.jsx)("div", { className: HomeProjects_module_css_1.default.projectImage, style: {
                                backgroundImage: `url(${project.src})`,
                                height: '300px',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                margin: '20px',
                            } }), (0, jsx_runtime_1.jsx)("div", { className: HomeProjects_module_css_1.default.projectInfo, style: {
                                transform: `translate(${offsetX * 0.05}px, ${offsetY * 0.1}px)`,
                                transition: 'transform 0.2s ease-out',
                            }, children: project.info })] }, index))) })] }));
};
exports.default = HomeProjects;
//# sourceMappingURL=HomeProjects.js.map