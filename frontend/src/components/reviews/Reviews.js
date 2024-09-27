import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Reviews.module.css";
import siemens from "../../assets/siemens.png";
import ScrollingText from "./ScrollingText/ScrollingText";
import Review from "./Review/Review";
const reviews = [
    {
        src: siemens,
        alt: "Siemens logo",
        name: "Steve J.",
        companyName: "Siemens mobility",
        reviewText: "This is the review text from client 1. They had a great experience with our service.",
    },
    {
        src: siemens,
        alt: "Lumen logo",
        name: "Andrew W.",
        companyName: "Lumen",
        reviewText: "This is the review text from client 2. They were very satisfied with the results.",
    },
    {
        src: siemens,
        alt: "Another logo",
        name: "Josh S.",
        companyName: "Siemens mobility",
        reviewText: "This is the review text from client 3. They highly recommend our services.",
    },
];
const Reviews = () => {
    return (_jsxs("div", { className: `${styles.reviewSection}`, children: [_jsx(ScrollingText, {}), _jsx("div", { className: styles.reviewContainer, children: reviews.map((review) => {
                    return (_jsx(Review, { src: review.src, alt: review.alt, name: review.name, companyName: review.companyName, text: review.reviewText }));
                }) })] }));
};
export default Reviews;
