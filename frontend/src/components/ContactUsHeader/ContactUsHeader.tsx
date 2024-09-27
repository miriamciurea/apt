import * as styles from "./ContactUsHeader.module.css";

const ContactUsHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>WORK WITH US</h1>
      <a href="/join-our-team" className={styles.cta}>
        Join Our Team
        <span className={styles.chevrons}>
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </span>
      </a>
    </header>
  );
};

export default ContactUsHeader;
