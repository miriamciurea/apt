import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./ContactUsHeader.module.css";
const ContactUsHeader = () => {
    return (_jsxs("header", { className: styles.header, children: [_jsx("h1", { className: styles.title, children: "WORK WITH US" }), _jsxs("a", { href: "/join-our-team", className: styles.cta, children: ["Join Our Team", _jsxs("span", { className: styles.chevrons, children: [_jsx("i", { className: "fas fa-chevron-right" }), _jsx("i", { className: "fas fa-chevron-right" })] })] })] }));
};
export default ContactUsHeader;
