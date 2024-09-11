import React, { useEffect, useRef, useState } from 'react';
import styles from './Review.module.css';
import siemens from '../../assets/siemens.png';

const Review: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [animationClass, setAnimationClass] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        // Trigger animation if title is in view
        if (rect.top <= window.innerHeight * 0.5) {
          setAnimationClass(styles.slideAnimation);
        } else {
          setAnimationClass('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.reviewSection}>
      <h1 ref={titleRef} className={`${styles.review} ${animationClass}`}>
        REVIEWS FROM OUR CLIENTS
      </h1>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewInstance}>
          <img src={siemens} alt="Siemens logo" className={styles.reviewImage} />
          <p className={styles.clientName}>Steve J.</p>
          <p className={styles.companyName}>Siemens mobility</p>
          <hr className={styles.reviewLine} />
          <div className={styles.reviewText}>
            <p>"This is the review text from client 1. They had a great experience with our service."</p>
          </div>
        </div>
        <div className={styles.reviewInstance}>
          <img src={siemens} alt="Client 2" className={styles.reviewImage} />
          <p className={styles.clientName}>Lumen</p>
          <p className={styles.companyName}>Andrew W.</p>
          <hr className={styles.reviewLine} />
          <div className={styles.reviewText}>
            <p>"This is the review text from client 2. They were very satisfied with the results."</p>
          </div>
        </div>
        <div className={styles.reviewInstance}>
          <img src={siemens} alt="Client 3" className={styles.reviewImage} />
          <p className={styles.clientName}>Josh S.</p>
          <p className={styles.companyName}>Siemens mobility</p>
          <hr className={styles.reviewLine} />
          <div className={styles.reviewText}>
            <p>"This is the review text from client 3. They highly recommend our services."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
