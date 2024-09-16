import React, { useEffect } from 'react';

const DotLottiePlayer2: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement('dotlottie-player', {
    src: 'https://lottie.host/681d8d80-4c99-469d-9c0a-50721c6f43fb/Ucd2jAPXKy.json',
    background: 'transparent',
    speed: '1',
    style: { width: '300px', height: '300px' },
    loop: true,
    autoplay: true,
  });
};

export default DotLottiePlayer2;
