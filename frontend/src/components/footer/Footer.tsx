import React from 'react'
import styles from './Footer.module.css';
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const Footer: React.FC = () => {
  return (
    <>
      <footer>

        <div className={styles.logo}>
          <span className="material-symbols-outlined">
            location_on
          </span>
        </div>

        <div className={styles.about}>
          <div className={styles.title}>
            About Us
          </div>
          <div className={styles.about_text}>
            APT is a construction agency that specializes in rail, civil and optic fibre, located in Midlands, United Kingdom.
          </div>
          <div className={styles.copyright}>
            copyright
          </div>
        </div>

        <div className={styles.git}>
          <div className={styles.title}>
            Get In Touch
          </div>

          <div className={styles.git_container}>

            <div className={styles.git_component}>

              <div className={styles.iconstyles}>
                <span className="material-symbols-outlined">
                  location_on
                </span>
              </div>

              <div className={styles.git_text}>
                267 Burnt Oak, Broadway, HA8 5ED
              </div>

            </div>

            <div className={styles.git_component}>

              <div className={styles.iconstyles}>
                <span className="material-symbols-outlined">
                  mail
                </span>
              </div>

              <div className={styles.git_text}>
                info@apt.com
              </div>

            </div>

            <div className={styles.git_component}>

              <div className={styles.iconstyles}>
                <span className="material-symbols-outlined">
                  call
                </span>
              </div>

              <div className={styles.git_text}>
                12345678909
              </div>

            </div>

          </div>

        </div>

        <div className={styles.pages}>

            <a href="/">About Us</a>
            <a href="/">Projects</a>
            <a href="/">Careers</a>
            <a href="/">Get In Touch</a>
        </div>

      </footer>
    </>
  )
}

export default Footer
