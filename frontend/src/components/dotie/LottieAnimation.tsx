import Lottie from "react-lottie-player";

type LottieAnimationProps = {
  animation: { ["default"]: object } | object;
};

const LottieAnimation = ({ animation }: LottieAnimationProps) => {
  return (
    <Lottie
      loop
      play
      animationData={animation}
      style={{
        width: 300,
        height: 300,
        display: "block",
        margin: "0 auto",
      }}
    />
  );
};

export default LottieAnimation;
