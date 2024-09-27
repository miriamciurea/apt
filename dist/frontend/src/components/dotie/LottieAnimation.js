"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_lottie_player_1 = __importDefault(require("react-lottie-player"));
const LottieAnimation = ({ animation, width = 300, height = 300, margin = "0 auto", }) => {
    return ((0, jsx_runtime_1.jsx)(react_lottie_player_1.default, { loop: true, play: true, animationData: animation, style: {
            width: width,
            height: height,
            display: "block",
            margin: margin,
        } }));
};
exports.default = LottieAnimation;
//# sourceMappingURL=LottieAnimation.js.map