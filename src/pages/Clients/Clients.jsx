import React from "react";
import styles from "./Clients.module.css";
import CardTitle from "../../Components.js/CardTitle/CardTitle";
import Card from "../../Components.js/Card/Card";
import Button from "../../Components.js/Button/Button";
import image1 from "../../assets/Ellipse 14.png"
import image2 from "../../assets/Ellipse 15.png"
import image3 from "../../assets/Ellipse 16.png"
const Clients = () => {
  return (
    <div className={styles.clientsWrapper}>
      <div className={styles.header}>
        <div className={styles.titleContainer}><CardTitle content={"What says our happy Clients"} /></div>
        <Button />
      </div>
      <div className={styles.cardContainer}>
        <Card
          icon={image1}
          title={"98% Success Rate"}
          position={'Ceo of Hunt'}
        />
        <Card
          icon={image2}
          title={"100% Success Rate"}
          position={'Ceo of Hunt'}
          middle={true}
        />
        <Card
          icon={image3}
          title={"100% Success Rate"}
          position={'Ceo of Hunt'}
        />
      </div>
    </div>
  );
};

export default Clients;
