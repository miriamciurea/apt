import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./AboutUsDescription.module.css";
import Icon from "./Icon/Icon";
import { FaLightbulb } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { MdDiversity3 } from "react-icons/md";
const icons = [
    { iconComponent: _jsx(FaLightbulb, {}), text: "Innovation" },
    { iconComponent: _jsx(FaLeaf, {}), text: "Sustainabillity" },
    {
        iconComponent: _jsx(FiCheckCircle, {}),
        text: "Certified",
    },
    {
        iconComponent: _jsx(MdDiversity3, {}),
        text: "Inclusive",
    },
    {
        iconComponent: _jsx(FaHardHat, {}),
        text: "Safety",
    },
];
const AboutUsDescription = () => {
    return (_jsxs("div", { className: styles.descriptionContainer, children: [_jsxs("div", { className: styles.introContainer, children: [_jsxs("h1", { className: styles.title, children: ["WELCOME TO ", _jsx("span", { className: styles.highlight, children: "APT" })] }), _jsxs("p", { className: styles.text, children: ["For ", _jsx("span", { className: styles.highlight, children: "20" }), " years, we've specialized in ", _jsx("span", { className: styles.underlined, children: "rail" }), " and", " ", _jsx("span", { className: styles.underlined, children: "fiber construction" }), " ", "projects, delivering high-quality, reliable solutions. Our experienced team is dedicated to excellence and innovation, prioritizing the well-being and professional growth of our staff.", _jsx("br", {}), _jsx("br", {}), " At APT, we pride ourselves on our", " ", _jsx("span", { className: styles.underlined, children: "commitment to safety" }), ",", " ", _jsx("span", { className: styles.underlined, children: "quality" }), ", and", " ", _jsx("span", { className: styles.underlined, children: "customer satisfaction" }), "."] })] }), _jsx("div", { className: styles.iconsContainer, children: icons.map((icon) => (_jsx(Icon, { Component: icon.iconComponent, text: icon.text }))) })] }));
};
export default AboutUsDescription;
