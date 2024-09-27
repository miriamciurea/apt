import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Icon.module.css";
const Icon = ({ Component, text }) => {
    return (_jsxs("div", { className: styles.iconContainer, children: [_jsx("div", { className: styles.icon, children: Component }), _jsx("hr", { className: styles.underline }), _jsx("p", { className: styles.iconText, children: text })] }));
};
export default Icon;
