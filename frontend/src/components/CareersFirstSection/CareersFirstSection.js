import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./CareersFirstSection.module.css";
const items = [
    { name: "INNOVATIVE AND IMPACTFUL WORK" },
    { name: "COMMITMENT TO WORK-LIFE BALANCE" },
    { name: "COLLABORATIVE AND SUPPORTIVE ENVIRONMENT" },
    { name: "A CULTURE OF RESPECT AND INTEGRITY" },
    { name: "OPPORTUNITIES FOR GROWTH AND DEVELOPMENT" },
    { name: "A CHANCE TO MAKE A DIFFERENCE" },
];
const CareersFirstSection = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.container, children: [_jsxs("h1", { className: styles.title, children: ["THRILLED TO WELCOME ", _jsx("span", { className: styles.highlight, children: "YOU" }), " TO", " ", _jsx("span", { children: "OUR TEAM" })] }), _jsx("h2", { className: styles.subTitle, children: "WHY JOIN US?" }), _jsxs("div", { className: styles.reasonsContainer, children: [_jsx("div", { children: items.map((item) => {
                                return (_jsx("div", { className: styles.agCoursesItem, children: _jsxs("div", { className: styles.agCoursesItemLink, children: [_jsx("div", { className: styles.agCoursesItemBg }), _jsx("div", { className: styles.agCoursesItemTitle, children: item.name })] }) }));
                            }) }), _jsx("div", { className: styles.imageContainer })] })] }) }));
};
export default CareersFirstSection;
