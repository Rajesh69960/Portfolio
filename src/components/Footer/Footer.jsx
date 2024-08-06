import React from "react";
import styles from "./Footer.module.css";
import mail from "../../assets/image 12.png";
import linkd from "../../assets/image 13.png";
import gitHub from "../../assets/image 14.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.contact}>
        <h2 className={styles.head}>Contact</h2>
        <p className={styles.para}>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={mail} alt="mail icon" />

          <a href="mailto:rajeshpaswan69960@gmail.com">
            rajeshpaswan69960@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkd} alt="linkedin icon" />
          <a href="https://www.linkedin.com/Rajesh">
            https://www.linkedin.com/Rajesh
          </a>
        </li>
        <li className={styles.link}>
          <img src={gitHub} alt="github icon" />
          <a href="https://www.GitHub.com/Rajesh69960">
            GitHub.com/Rajesh69960
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
