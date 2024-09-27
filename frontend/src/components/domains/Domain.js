import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Domain.module.css";
import electric from "../../lotties/electric.json";
import train from "../../lotties/train.json";
import construction from "../../lotties/construction.json";
import LottieAnimation from "../dotie/LottieAnimation";
const Domain = () => {
    const icons = [
        {
            component: _jsx(LottieAnimation, { animation: construction }),
            subtitle: "CONSTRUCTION",
            description: "Constructing tommorow with expertise.",
        },
        {
            component: _jsx(LottieAnimation, { animation: train }),
            subtitle: "CIVIL - RAIL",
            description: "Reliable Rail-Civil infrastructure. ",
        },
        {
            component: _jsx(LottieAnimation, { animation: electric }),
            subtitle: "UTILITY | POWER",
            description: "Empowering your grid, sustainably.",
        },
    ];
    return (_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.title, children: ["CONNECTING ", _jsx("span", { className: styles.highlight, children: "UK" }), "'S FUTURE"] }), _jsx("div", { className: styles.iconsContainer, children: icons.map((icon, index) => (_jsxs("div", { className: `${styles.iconBlock} ${index === 0 ? styles.firstIcon : ""}`, children: [_jsx("div", { className: index === 0 ? styles.clipContainer : "", children: icon.component }), _jsx("h3", { className: styles.subtitle, children: icon.subtitle }), _jsx("p", { className: styles.description, children: icon.description })] }, index))) })] }));
};
export default Domain;
