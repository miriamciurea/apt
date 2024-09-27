import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const fallbackImageUrl = 'https://images.unsplash.com/photo-1630683924997-fe27050a0416?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=YOUR_UNSPLASH_ACCESS_KEY`
        );
        const data = await response.json();
        setImageUrl(data.urls.regular || fallbackImageUrl);
      } catch (error) {
        console.error('Error fetching the image from Unsplash', error);
        setImageUrl(fallbackImageUrl); // Use fallback image if fetch fails
      }
    };

    fetchImage();

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
        style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'var(--background-position)' }}
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
            <a href="your-link-url" className={styles.homeLink}>
              Our Career Opportunities &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
