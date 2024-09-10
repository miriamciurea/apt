import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>INNOVATIVE RAILWAY & FIBRE</h1>
        <a href="/learn-more" className={styles.cta}>Learn More</a>
        <a href="/learn-more" className={styles.cta}>Join Our Team</a>
      </div>
    </section>
  );
};



export default Hero;
