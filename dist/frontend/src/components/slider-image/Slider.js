"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Slider_module_css_1 = __importDefault(require("./Slider.module.css"));
const Slider = () => {
    const [imageUrl, setImageUrl] = (0, react_1.useState)('');
    const fallbackImageUrl = 'https://images.unsplash.com/photo-1630683924997-fe27050a0416?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    (0, react_1.useEffect)(() => {
        const fetchImage = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://api.unsplash.com/photos/random?client_id=YOUR_UNSPLASH_ACCESS_KEY`);
                const data = yield response.json();
                setImageUrl(data.urls.regular || fallbackImageUrl);
            }
            catch (error) {
                console.error('Error fetching the image from Unsplash', error);
                setImageUrl(fallbackImageUrl); // Use fallback image if fetch fails
            }
        });
        fetchImage();
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollPercent = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
            const offset = scrollPercent * 100; // Adjust the multiplier as needed
            document.documentElement.style.setProperty('--background-position', `center ${offset}%`);
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: Slider_module_css_1.default.home, children: (0, jsx_runtime_1.jsx)("div", { className: Slider_module_css_1.default.background, style: { backgroundImage: `url(${imageUrl})`, backgroundPosition: 'var(--background-position)' }, children: (0, jsx_runtime_1.jsxs)("div", { className: Slider_module_css_1.default.overlay, children: [(0, jsx_runtime_1.jsx)("div", { className: Slider_module_css_1.default.title, children: (0, jsx_runtime_1.jsx)("h1", { children: "JOIN OUR COMMUNITY" }) }), (0, jsx_runtime_1.jsx)("div", { className: Slider_module_css_1.default.text, children: (0, jsx_runtime_1.jsxs)("p", { children: ["In the ever-changing construction industry, we\u2019re proud to offer ", (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "competitive benefits" }), " along with an ", (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "education allowance" }), " to help employees continue to learn and develop. We strive to foster a work environment where relationships are valued and every team member is treated with ", (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "trust and respect" }), "."] }) }), (0, jsx_runtime_1.jsx)("div", { className: Slider_module_css_1.default.link, children: (0, jsx_runtime_1.jsx)("a", { href: "your-link-url", className: Slider_module_css_1.default.homeLink, children: "Our Career Opportunities >>" }) })] }) }) }));
};
exports.default = Slider;
//# sourceMappingURL=Slider.js.map