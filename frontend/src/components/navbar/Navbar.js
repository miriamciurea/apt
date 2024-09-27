import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Navbar.module.css';
import newlogo from '../../assets/newlogo.png';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (_jsxs("nav", { className: styles.navbar, children: [_jsx(Link, { to: "/", className: styles.logoLink, children: _jsx("img", { src: newlogo, alt: "logo", className: styles.logo }) }), _jsx("div", { className: styles.menuIcon, onClick: toggleMenu, children: _jsx("i", { className: "fas fa-bars" }) }), _jsxs("ul", { className: `${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`, children: [_jsx("li", { className: styles.navItem, children: _jsxs(Link, { to: "/about", className: `${styles.navLink} ${styles.learnMore}`, children: [_jsx("span", { className: styles.circle, "aria-hidden": "true", children: _jsx("span", { className: `${styles.icon} ${styles.arrow}` }) }), _jsx("span", { className: styles.buttonText, children: "ABOUT US" })] }) }), _jsx("li", { className: styles.navItem, children: _jsxs(Link, { to: "/careers", className: `${styles.navLink} ${styles.learnMore}`, children: [_jsx("span", { className: styles.circle, "aria-hidden": "true", children: _jsx("span", { className: `${styles.icon} ${styles.arrow}` }) }), _jsx("span", { className: styles.buttonText, children: "CAREERS" })] }) }), _jsx("li", { className: styles.navItem, children: _jsxs(Link, { to: "/projects", className: `${styles.navLink} ${styles.learnMore}`, children: [_jsx("span", { className: styles.circle, "aria-hidden": "true", children: _jsx("span", { className: `${styles.icon} ${styles.arrow}` }) }), _jsx("span", { className: styles.buttonText, children: "PROJECTS" })] }) }), _jsx("li", { className: styles.navItem, children: _jsxs(Link, { to: "/getintouch", className: `${styles.navLink} ${styles.learnMore}`, children: [_jsx("span", { className: styles.circle, "aria-hidden": "true", children: _jsx("span", { className: `${styles.icon} ${styles.arrow}` }) }), _jsx("span", { className: styles.buttonText, children: "GET IN TOUCH" })] }) })] })] }));
};
export default Navbar;
