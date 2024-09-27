import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import videoBG from '../../assets/autumn.mp4';
const Hero = () => {
    console.log('Styles object:', styles);
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1; // Adjust the playback rate (0.5 is 50% speed)
        }
    }, []);
    return (_jsxs("section", { className: styles.hero, children: [_jsx("video", { src: videoBG, autoPlay: true, loop: true, muted: true, className: styles.video, ref: videoRef }), _jsx("div", { className: styles.overlay }), _jsx("div", { className: styles.logoContainer }), _jsxs("div", { className: styles.content, children: [_jsxs("h1", { className: styles.title, children: [_jsx("span", { className: styles.innovative, children: "INNOVATIVE" }), _jsx("br", {}), _jsx("span", { className: styles.railway, children: "RAILWAY" }), _jsx("br", {}), _jsx("span", { className: styles.fibre, children: " & FIBRE" })] }), _jsxs("a", { href: "/about", className: styles.cta, style: { paddingLeft: '0px' }, children: ["Learn More", _jsxs("span", { className: styles.chevrons, children: [_jsx("i", { className: "fas fa-chevron-right" }), _jsx("i", { className: "fas fa-chevron-right" })] })] }), _jsxs("a", { href: "/careers", className: styles.cta, children: ["Join Our Team", _jsxs("span", { className: styles.chevrons, children: [_jsx("i", { className: "fas fa-chevron-right" }), _jsx("i", { className: "fas fa-chevron-right" })] })] })] })] }));
};
export default Hero;
