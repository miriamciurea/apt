import Lottie from "react-lottie-player";

type LottieAnimationProps = {
  animation: { ["default"]: object } | object;
  width: number;
  height: number;
  margin: string;
};

const LottieAnimation = ({
  animation,
  width = 300,
  height = 300,
  margin = "0 auto",
}: LottieAnimationProps) => {
  return (
    <Lottie
      loop
      play
      animationData={animation}
      style={{
        width: width,
        height: height,
        display: "block",
        margin: margin,
      }}
    />
  );
};

export default LottieAnimation;
