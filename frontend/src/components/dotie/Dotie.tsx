import React, { useEffect } from 'react';
import styles from '../dotie/Dotie.module.css';

const DotLottiePlayer = () => {
  useEffect(() => {
    // Dynamically load the DotLottie player script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    React.createElement('dotlottie-player', {
      src: 'https://lottie.host/e6b306ed-c126-4f4a-a7b4-603d2a65da44/lYdMLlR1FP.json',
      background: 'transparent',
      speed: '1',
      className: 'dotlottie-player',
      loop: true,
      autoplay: true,
    })

  );
};

export default DotLottiePlayer;
