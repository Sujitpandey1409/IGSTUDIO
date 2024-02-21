import React, { useState } from "react";
import styles from "./Team.module.css";
import CardTitle from "../../Components.js/CardTitle/CardTitle";
import TeamCard from "../../Components.js/TeamCard/TeamCard";
import image1 from "../../assets/Ellipse 14.png";
import { contact } from "../../assets/data";
const Team = () => {
  return (
    <div className={styles.TeamWrapper} id="Attorneys">
      <CardTitle content={"Our Team"} />
      <div className={styles.cardContainer}>
        {contact.map((el, i) => (
          <TeamCard
            key={i}
            icon={el.icon}
            middle={el.middle}
            title={el.title}
            subtitle={el.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
