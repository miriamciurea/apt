import Lottie from "react-lottie-player";
import { useState } from "react";

type LottieAnimationProps = {
  animation: { ["default"]: object } | object;
};

const LottieAnimation = ({ animation }: LottieAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie
        loop
        play={isHovered}
        animationData={animation}
        style={{
          width: 300,
          height: 300,
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default LottieAnimation;
