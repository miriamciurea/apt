import React from "react";
import styles from "./Footer.module.css";
import newlogo from "../../assets/newlogo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className={styles.logo}>
          <img src={newlogo} alt="logo" />
        </div>

        <div className={styles.about}>
          <div className={styles.title}>Who We Are</div>
          <div>
            APT is a company  that specializes in civil-rail and utilities, located in Midlessex, United Kingdom.
          </div>
          <div className={styles.copyright}>
            <Link to="/copyright">Copyright</Link>
          </div>
        </div>

        <div className={styles.git}>
          <div className={styles.title}>Find Us Here </div>

          <div className={styles.git_container}>
            <div className={styles.git_component}>
              <div className={styles.iconstyles}>
                <span className="material-symbols-outlined">location_on</span>
              </div>

              <div>
                582 Honeypot Lane, HA7 1JS
                {/* <br /> Unity House Westwood Park, Wigan, Great Manchester, WN3 */}
              </div>
            </div>

            <div className={styles.git_component}>
              <div className={styles.iconstyles}>
                <span className="material-symbols-outlined">location_on</span>
              </div>

              <div>
                Unity House Westwood Park, Wigan WN3 4HE, UK
              </div>
            </div>

            <div className={styles.git_component}>
              <div className={styles.iconstyles}>
                <span className="material-symbols-outlined">mail</span>
              </div>

              <div>info@apt.com</div>
            </div>

            <div className={styles.git_component}>
              <div className={styles.iconstyles}>
                <span className="material-symbols-outlined">call</span>
              </div>

              <div>+447977763028</div>
            </div>
          </div>
        </div>

        <div className={styles.pages}>
          <div className={styles.title}>Explore</div>

          <div className={styles.pages_list}>
            <a href="/about">About Us</a>
            <a href="/projects">Projects</a>
            <a href="/careers">Careers</a>
            <a href="/getintouch">Get In Touch</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
