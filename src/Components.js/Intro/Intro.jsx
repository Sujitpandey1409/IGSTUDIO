import React from "react";
import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.titleLeft}>Let’s Introduce Ourself</div>
      <div className={styles.seperator}></div>
      <div className={styles.introRight}>
        <p className={styles.titleRight}>Criminal Lawyer</p>
        <p className={styles.para}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
