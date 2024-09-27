"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Reviews_module_css_1 = __importDefault(require("./Reviews.module.css"));
const siemens_png_1 = __importDefault(require("../../assets/siemens.png"));
const ScrollingText_1 = __importDefault(require("./ScrollingText/ScrollingText"));
const Review_1 = __importDefault(require("./Review/Review"));
const reviews = [
    {
        src: siemens_png_1.default,
        alt: "Siemens logo",
        name: "Steve J.",
        companyName: "Siemens mobility",
        reviewText: "This is the review text from client 1. They had a great experience with our service.",
    },
    {
        src: siemens_png_1.default,
        alt: "Lumen logo",
        name: "Andrew W.",
        companyName: "Lumen",
        reviewText: "This is the review text from client 2. They were very satisfied with the results.",
    },
    {
        src: siemens_png_1.default,
        alt: "Another logo",
        name: "Josh S.",
        companyName: "Siemens mobility",
        reviewText: "This is the review text from client 3. They highly recommend our services.",
    },
];
const Reviews = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${Reviews_module_css_1.default.reviewSection}`, children: [(0, jsx_runtime_1.jsx)(ScrollingText_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: Reviews_module_css_1.default.reviewContainer, children: reviews.map((review) => {
                    return ((0, jsx_runtime_1.jsx)(Review_1.default, { src: review.src, alt: review.alt, name: review.name, companyName: review.companyName, text: review.reviewText }));
                }) })] }));
};
exports.default = Reviews;
//# sourceMappingURL=Reviews.js.map