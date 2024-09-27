import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Review.module.css";
const Review = ({ name, src, alt, companyName, text }) => {
    return (_jsxs("div", { className: styles.reviewInstance, children: [_jsx("img", { src: src, alt: alt, className: styles.reviewImage }), _jsx("p", { className: styles.clientName, children: name }), _jsx("p", { className: styles.companyName, children: companyName }), _jsx("hr", { className: styles.reviewLine }), _jsx("div", { className: styles.reviewText, children: _jsx("p", { children: text }) })] }));
};
export default Review;
