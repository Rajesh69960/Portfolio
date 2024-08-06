import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/AboutHero.png";
import blueArrow from "../../assets/image 2.png";
import server from "../../assets/image 3.png";
import UI from "../../assets/image 4.png";
const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.about}>About</h2>
      <div className={styles.contain}>
        <img
          className={styles.aboutImage}
          src={aboutImage}
          alt="About page image "
        />
        <ul className={styles.items}>
          <li className={styles.item}>
            <img src={blueArrow} alt=" blue arrow" />
            <div className={styles.headingContain}>
              <h3 className={styles.aboutHeadings}>Frontend Developer</h3>
              <p className={styles.para}>
                I'm a frontend developer with experience in building{" "}
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={server} alt=" server image" />
            <div className={styles.headingContain}>
              <h3 className={styles.aboutHeadings}>Backend Developer</h3>
              <p className={styles.para}>
                I'm a frontend developer with experience in building{" "}
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={UI} alt="UI image" />
            <div className={styles.headingContain}>
              <h3 className={styles.aboutHeadings}>UI/UX Developer</h3>
              <p className={styles.para}>
                I'm a frontend developer with experience in building{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
