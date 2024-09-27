"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CompanyValues_module_css_1 = __importDefault(require("./CompanyValues.module.css"));
const CompanyValues = () => {
    const values = [
        {
            title: 'Integrity',
            shortDescription: `We believe that integrity is the foundation of all our actions...`,
            fullDescription: `<p>We believe that <span class="${CompanyValues_module_css_1.default.highlight}">integrity</span> is the foundation of all our actions.
        We are committed to conducting our business with the highest <span class="${CompanyValues_module_css_1.default.highlight}">ethical standards</span>,
        being honest and accountable in every decision we make.</p>
        <p>Our dedication to <span class="${CompanyValues_module_css_1.default.highlight}">integrity</span> builds trust with clients, partners, and communities.
        We strive to maintain these values in all our interactions, fostering long-term relationships based on mutual respect.</p>`
        },
        {
            title: 'Safety',
            shortDescription: `Safety is our top priority. We create a safe work environment...`,
            fullDescription: `<p><span class="${CompanyValues_module_css_1.default.highlight}">Safety</span> is our top priority. We create a safe work environment for all employees, clients,
        and communities, with protocols designed to prevent accidents and injuries.</p>
        <p>We continuously invest in training and education to stay updated with the latest safety standards,
        fostering a culture of <span class="${CompanyValues_module_css_1.default.highlight}">safety</span> where employees actively maintain a secure workplace.</p>`
        },
        {
            title: 'Quality',
            shortDescription: `Quality is at the heart of everything we do. We are dedicated...`,
            fullDescription: `<p><span class="${CompanyValues_module_css_1.default.highlight}">Quality</span> is at the heart of everything we do. We are dedicated to delivering exceptional products
        and services that meet the highest standards of excellence, ensuring client satisfaction.</p>
        <p>We take pride in our attention to detail and our ability to exceed expectations,
        continuously seeking new ways to enhance the <span class="${CompanyValues_module_css_1.default.highlight}">quality</span> of our work.</p>`
        },
        {
            title: 'Innovation',
            shortDescription: `Innovation drives our success. We foster a culture of creativity...`,
            fullDescription: `<p><span class="${CompanyValues_module_css_1.default.highlight}">Innovation</span> drives our success. We foster a culture of creativity and forward-thinking
        to meet the evolving needs of our clients with innovative solutions.</p>
        <p>By embracing <span class="${CompanyValues_module_css_1.default.highlight}">innovation</span> and investing in cutting-edge technology,
        we provide efficient and effective solutions, encouraging fresh ideas and continuous improvement.</p>`
        }
    ];
    const [expanded, setExpanded] = (0, react_1.useState)(Array(values.length).fill(false));
    const toggleReadMore = (index) => {
        setExpanded((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: CompanyValues_module_css_1.default.container, children: [(0, jsx_runtime_1.jsx)("h2", { className: CompanyValues_module_css_1.default.subtitle, children: "OUR COMPANY VALUES" }), (0, jsx_runtime_1.jsx)("div", { className: CompanyValues_module_css_1.default.values, children: values.map((value, index) => ((0, jsx_runtime_1.jsxs)("div", { className: `${CompanyValues_module_css_1.default.value} ${index % 2 === 0 ? CompanyValues_module_css_1.default.higher : CompanyValues_module_css_1.default.lower}`, children: [(0, jsx_runtime_1.jsx)("h3", { className: CompanyValues_module_css_1.default.title, children: value.title }), (0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: { __html: expanded[index] ? value.fullDescription : value.shortDescription } }), (0, jsx_runtime_1.jsx)("button", { className: CompanyValues_module_css_1.default.readMoreButton, onClick: () => toggleReadMore(index), children: expanded[index] ? 'Read Less' : 'Read More' })] }, index))) })] }));
};
exports.default = CompanyValues;
//# sourceMappingURL=CompanyValues.js.map