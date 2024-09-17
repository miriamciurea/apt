import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Navbar.module.css';
import newlogo from '../../assets/newlogo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoLink}>
        <img src={newlogo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li className={styles.navItem}>
          <Link to="/about" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>ABOUT US</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/careers" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>CAREERS</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>PROJECTS</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/getintouch" className={`${styles.navLink} ${styles.learnMore}`}>
            <span className={styles.circle} aria-hidden="true">
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>GET IN TOUCH</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
