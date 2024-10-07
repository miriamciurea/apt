import React, { useEffect } from 'react';
import styles from './Slider.module.css';

const Slider: React.FC = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercent = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
      const offset = scrollPercent * 100; // Adjust the multiplier as needed
      document.documentElement.style.setProperty('--background-position', `center ${offset}%`);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.background}
        style={{ backgroundPosition: 'var(--background-position)' }}
      >
        <div className={styles.overlay}>
          <div className={styles.title}>
            <h1>JOIN OUR COMMUNITY</h1>
          </div>
          <div className={styles.text}>
            <p>
              In the ever-changing construction industry, we’re proud to offer <span className="highlight">competitive benefits</span> along with an <span className="highlight">education allowance</span> to help employees continue to learn and develop. We strive to foster a work environment where relationships are valued and every team member is treated with <span className="highlight">trust and respect</span>.
            </p>
          </div>
          <div className={styles.link}>
            <button
              onClick={() => window.location.href = '/careers'}
              className={styles.homeButton}
            >
              Our Career Opportunities &gt;&gt;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slider;
