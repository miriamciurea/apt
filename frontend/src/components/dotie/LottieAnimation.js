import { jsx as _jsx } from "react/jsx-runtime";
import Lottie from "react-lottie-player";
const LottieAnimation = ({ animation, width = 300, height = 300, margin = "0 auto", }) => {
    return (_jsx(Lottie, { loop: true, play: true, animationData: animation, style: {
            width: width,
            height: height,
            display: "block",
            margin: margin,
        } }));
};
export default LottieAnimation;
