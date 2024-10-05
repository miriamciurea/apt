import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Adjust the playback rate if needed
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Use the Dropbox video link directly in the video element */}
      <video
        src="https://uc575da12482010aed23d3bcd52b.dl.dropboxusercontent.com/cd/0/inline/Cb00YDaH_jSkrisWrSQSrkJlzGkVITyZs3GFDld95bHilcdJ33wE_WJJuBCh8JxawbrZ9Xzh9yTBAAQ61UMZmqBvl8jt7AnwSffzTvAz9S0WjR6oZSR20AuXsfTbMlxXrbHu_Bl04xlig1fsLEdPobeU/file#"

        autoPlay
        loop
        muted
        className={styles.video}
        ref={videoRef}
      ></video>
      <div className={styles.overlay}></div>
      <div className={styles.logoContainer}>
        {/* You can add your logo image here if needed */}
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.innovative}>INNOVATIVE</span><br />
          <span className={styles.railway}>RAILWAY</span><br />
          <span className={styles.fibre}> & FIBRE</span>
        </h1>
        <a href="/about" className={styles.cta} style={{ paddingLeft: '0px' }}>
          Learn More
          <span className={styles.chevrons}>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </span>
        </a>
        <a href="/careers" className={styles.cta}>
          Join Our Team
          <span className={styles.chevrons}>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
