import React from "react";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonLeft}>
        ←
      </div>
      <div className={styles.buttonRight}>
        →
      </div>
    </div>
  );
};

export default Button;
