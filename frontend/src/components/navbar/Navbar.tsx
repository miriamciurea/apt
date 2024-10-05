import React, { useState } from 'react';
import styles from './Navbar.module.css';
import newlogo from '../../assets/newlogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
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
          <a href="/about" className={`${styles.navLink}`} onClick={handleMenuItemClick}>
            <span className={styles.buttonText}>ABOUT US</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/careers" className={`${styles.navLink}`} onClick={handleMenuItemClick}>
            <span className={styles.buttonText}>CAREERS</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/projects" className={`${styles.navLink}`} onClick={handleMenuItemClick}>
            <span className={styles.buttonText}>PROJECTS</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/getintouch" className={`${styles.navLink}`} onClick={handleMenuItemClick}>
            <span className={styles.buttonText}>GET IN TOUCH</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
