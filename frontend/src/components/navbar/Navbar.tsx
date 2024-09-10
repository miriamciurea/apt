// Navbar.tsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
