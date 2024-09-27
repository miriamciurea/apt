import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './EarlyDays.module.css';
import h1 from '../../../public/images/h1.jpeg'; // Import local images
import h2 from '../../../public/images/h2.jpeg';
import h3 from '../../../public/images/h3.jpeg';
import h4 from '../../../public/images/h4.jpeg';
const EarlyDays = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.title, children: "EARLY DAYS" }), _jsxs("div", { className: styles.content, children: [_jsxs("div", { className: styles.contentItem1, children: ["In the early 2000s, our journey in the rail and construction industry began with humble beginnings. With a small, dedicated team and limited resources, we took on our first few projects, focusing on quality and precision. Each project was a learning experience, allowing us to refine our skills and build a reputation for reliability and excellence.", _jsxs("div", { className: styles.photo1, children: [_jsx("div", { children: _jsx("img", { src: h1, alt: "Construction Site", className: "photoImage" }) }), _jsxs("div", { children: [_jsx("img", { src: h2, alt: "Team Construction Site", className: "photoImage" }), _jsx("img", { src: h4, alt: "Construction", className: "photoImage", style: {
                                                        width: `70%`
                                                    } })] })] })] }), _jsxs("div", { className: styles.contentItem2, children: [_jsx("div", { className: styles.photo2, children: _jsx("div", { children: _jsx("img", { src: h3, alt: "Railway Workers", className: "photoImage", style: {
                                                width: `99%`
                                            } }) }) }), "As we navigated through challenges and seized opportunities, our expertise grew. Through perseverance and hard work, we expanded our capabilities and services. This foundation laid the groundwork for the thriving company we are today, committed to innovation and excellence in every project."] })] })] }) }));
};
export default EarlyDays;
