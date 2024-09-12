import React, { useState } from 'react';
import styles from './Navbar.module.css';
import newlogo from '../../assets/newlogo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logoLink}>
        <img src={newlogo} alt="logo" className={styles.logo} />
      </a>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
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
