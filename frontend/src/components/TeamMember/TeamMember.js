import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./TeamMember.module.css";
const TeamMember = ({ imageSource, name, role, alt }) => {
    return (_jsxs("div", { className: styles.teamMember, children: [_jsx("img", { src: imageSource, alt: alt, className: styles.teamImage }), _jsx("h2", { className: styles.teamName, children: name }), _jsx("p", { className: styles.teamRole, children: role })] }));
};
export default TeamMember;
