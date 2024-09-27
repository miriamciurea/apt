import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ImageHoverDisplay.module.css';
const ImageHoverDisplay = () => {
    return (_jsxs("section", { className: styles.container, children: [_jsxs("h2", { className: styles.title, children: ["WHAT ", _jsx("span", { className: styles.highlight, children: "WE" }), " OFFER"] }), _jsxs("div", { className: styles.imageContainer, children: [_jsxs("div", { className: `${styles.imageWrapper} ${styles.image1}`, children: [_jsx("div", { className: styles.overlay, children: "title " }), _jsx("div", { className: styles.subtitle, children: "description" })] }), _jsxs("div", { className: `${styles.imageWrapper} ${styles.image2}`, children: [_jsx("div", { className: styles.overlay, children: "Project 2 Description" }), _jsx("div", { className: styles.subtitle, children: "Project 2 Subtitle" })] }), _jsxs("div", { className: `${styles.imageWrapper} ${styles.image3}`, children: [_jsx("div", { className: styles.overlay, children: "Project 3 Description" }), _jsx("div", { className: styles.subtitle, children: "Project 3 Subtitle" })] })] })] }));
};
export default ImageHoverDisplay;
