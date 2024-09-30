import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1; // Adjust the playback rate if needed
        }
    }, []);

    return _jsxs("section", {
        className: styles.hero,
        children: [
            _jsx("video", {
                src: "https://uc60096eadef4fd3fef9842e5981.dl.dropboxusercontent.com/cd/0/inline/Cbi0f5CxlFLnfBo0rbqxpWidyLBIhkig-E8ZdXoQW7u9YIGnGUeCJ1BE6yP-kJ0JwcN0KWd3KdkfzQwLXA3_2pnF6anIcN0CH9w1VMH1ZAbwgSwynUg_sObEmjotOQfIIa9MDwf79P86g_bW99HGF1Mh/file#",
                autoPlay: true,
                loop: true,
                muted: true,
                className: styles.video,
                ref: videoRef
            }),
            _jsx("div", {
                className: styles.overlay
            }),
            _jsx("div", {
                className: styles.logoContainer
            }),
            _jsxs("div", {
                className: styles.content,
                children: [
                    _jsxs("h1", {
                        className: styles.title,
                        children: [
                            _jsx("span", {
                                className: styles.innovative,
                                children: "INNOVATIVE"
                            }),
                            _jsx("br", {}),
                            _jsx("span", {
                                className: styles.railway,
                                children: "RAILWAY"
                            }),
                            _jsx("br", {}),
                            _jsx("span", {
                                className: styles.fibre,
                                children: " & FIBRE"
                            })
                        ]
                    }),
                    _jsxs("a", {
                        href: "/about",
                        className: styles.cta,
                        style: { paddingLeft: '0px' },
                        children: [
                            "Learn More",
                            _jsxs("span", {
                                className: styles.chevrons,
                                children: [
                                    _jsx("i", { className: "fas fa-chevron-right" }),
                                    _jsx("i", { className: "fas fa-chevron-right" })
                                ]
                            })
                        ]
                    }),
                    _jsxs("a", {
                        href: "/careers",
                        className: styles.cta,
                        children: [
                            "Join Our Team",
                            _jsxs("span", {
                                className: styles.chevrons,
                                children: [
                                    _jsx("i", { className: "fas fa-chevron-right" }),
                                    _jsx("i", { className: "fas fa-chevron-right" })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

export default Hero;
