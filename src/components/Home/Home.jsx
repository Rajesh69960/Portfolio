import React from "react";
import styles from "./Home.module.css";
import personImage from "../../assets/HeroImages.png";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contain}>
        <h1 className={styles.title}>Hi, I'm Rajesh</h1>
        <p className={styles.info}>
          I'm a full stack Web Developer with skills of MERN. Reach out if you
          want to know more about me!
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:rajeshpaswan69960@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.personImage}
        src={personImage}
        alt="person-image"
      />
      <div className={styles.topBackBlur}></div>
      <div className={styles.bottomBackBlur}></div>
    </section>
  );
};

export default Home;
