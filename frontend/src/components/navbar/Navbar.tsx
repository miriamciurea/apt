import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logoLink}>
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/about" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>ABOUT US</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/careers" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>CAREERS</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/projects" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>PROJECTS</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/getintouch" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>GET IN TOUCH</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
