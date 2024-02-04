import React from "react";
import styles from "./Subscription.module.css";
import CardTitle from "../CardTitle/CardTitle"

const Subscription = () => {
  return (
    <div className={styles.subscriptionBox} >
      <div className={styles.subscriptionBoxInner} >
        <CardTitle content={'Subscribe Our Newsletter'} />
        <div className={styles.mailInfo} >
            <input placeholder="Name :"  className={styles.inputName} />
            <input placeholder="Enter your Email"  className={styles.inputEmail} />
            <button className={styles.buttonSend} >SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
