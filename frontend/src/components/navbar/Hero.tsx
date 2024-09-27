import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import videoBG from '../../assets/autumn.mp4';


const Hero: React.FC = () => {

  console.log('Styles object:', styles);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Adjust the playback rate (0.5 is 50% speed)
    }
  }, []);

  return (
    <section className={styles.hero}>
      <video src={videoBG} autoPlay loop muted className={styles.video} ref={videoRef}></video>
      <div className={styles.overlay}></div>
      <div className={styles.logoContainer}>
        {/* <img src={logo} alt="Logo" /> */}
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.innovative}>INNOVATIVE</span><br />
          <span className={styles.railway}>RAILWAY</span><br />
          <span className={styles.fibre}> & FIBRE</span>
        </h1>
        <a href="/about" className={styles.cta} style={{paddingLeft: '0px'}}>
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
