"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const WhatWeOffer_module_css_1 = __importDefault(require("./WhatWeOffer.module.css"));
const domains = [
    {
        imageSource: "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Optic Fibre",
        alt: "Optic Fibre",
    },
    {
        imageSource: "https://plus.unsplash.com/premium_photo-1664301167194-455b2ea6f8e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Construction",
        alt: "Construction",
    },
    {
        imageSource: "https://plus.unsplash.com/premium_photo-1661962779084-1a15ec50dfca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Rail",
        alt: "Rail",
    },
];
const WhatWeOffer = () => {
    return ((0, jsx_runtime_1.jsxs)("section", { className: WhatWeOffer_module_css_1.default.section, children: [(0, jsx_runtime_1.jsxs)("h1", { className: WhatWeOffer_module_css_1.default.title, children: ["What ", (0, jsx_runtime_1.jsx)("span", { className: WhatWeOffer_module_css_1.default.highlight, children: "we" }), " offer"] }), (0, jsx_runtime_1.jsx)("div", { className: WhatWeOffer_module_css_1.default.container, children: domains.map((domain) => {
                    return ((0, jsx_runtime_1.jsxs)("div", { className: WhatWeOffer_module_css_1.default.imageContainer, children: [(0, jsx_runtime_1.jsx)("img", { src: domain.imageSource, alt: domain.alt, className: WhatWeOffer_module_css_1.default.image }), domain.name] }));
                }) })] }));
};
exports.default = WhatWeOffer;
//# sourceMappingURL=WhatWeOffer.js.map