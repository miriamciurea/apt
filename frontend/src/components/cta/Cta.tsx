import React from 'react'
import styles from './Cta.module.css';
// import newlogo from '../../assets/newlogo.png';

const Cta: React.FC = () => {
  return (
    <>
      <div className={styles.cta}>
        <div className={styles.title}>
          GET <span className={styles.blue}>CLOSER</span> TO YOUR <span className={styles.blue}>DREAMS</span>
        </div>

        <div className={styles.subtitle}>
          WHAT ARE YOU WAITING FOR?
        </div>

        <div className={styles.cta_button}>
        <div className="cta">
          <a href="/cta" className="navLink learnMore">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="buttonText">GET IN TOUCH</span>
          </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cta
