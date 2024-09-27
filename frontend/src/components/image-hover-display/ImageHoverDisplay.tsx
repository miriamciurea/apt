import React from 'react';
import * as styles from './ImageHoverDisplay.module.css';

const ImageHoverDisplay: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        WHAT <span className={styles.highlight}>WE</span> OFFER
      </h2>
      <div className={styles.imageContainer}>
        <div className={`${styles.imageWrapper} ${styles.image1}`}>
          <div className={styles.overlay}>title </div>
          <div className={styles.subtitle}>description</div>
        </div>
        <div className={`${styles.imageWrapper} ${styles.image2}`}>
          <div className={styles.overlay}>Project 2 Description</div>
          <div className={styles.subtitle}>Project 2 Subtitle</div>
        </div>
        <div className={`${styles.imageWrapper} ${styles.image3}`}>
          <div className={styles.overlay}>Project 3 Description</div>
          <div className={styles.subtitle}>Project 3 Subtitle</div>
        </div>
      </div>
    </section>
  );
};

export default ImageHoverDisplay;
