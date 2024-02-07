import React from "react";
import styles from "./Card.module.css";
const Card = ({ icon, title, position, button }) => {

      
  return (
    <div className={styles.cardContainer}>
      <img src={icon} alt="icon" />
      <div className={styles.title}>{title}</div>
      {position && <div className={styles.position}>{position}</div>}
      <div className={styles.detail}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </div>
      {button && <div className={styles.button}>Read More</div>}
    </div>
  );
};

export default Card;
