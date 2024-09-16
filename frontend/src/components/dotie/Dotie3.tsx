import React, { useEffect } from 'react';

const DotLottiePlayer3: React.FC = () => {
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

  return React.createElement('dotlottie-player', {
    src: 'https://lottie.host/7a4a781b-4640-4362-9b7f-88f94712c6cb/cpz7kNwNU0.json',
    background: 'transparent',
    speed: '1',
    style: { width: '300px', height: '300px' },
    loop: true,
    autoplay: true,
  });
};

export default DotLottiePlayer3;
