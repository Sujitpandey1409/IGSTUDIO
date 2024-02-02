import React, { useEffect, useRef } from "react";
import styles from './TeamCard.module.css'
const TeamCard = ({icon, title, subtitle, middle}) => {
    const teamCard = useRef(null)
    useEffect(()=>{
        if(middle){
            teamCard.current.classList.add(styles.addColor)
        }
    }
    )
  return (
    <div ref={teamCard} className={styles.cardTeam}>
      <img src={icon} alt={icon}/>
      <div className={styles.cardRight}><h5>{title}</h5><p>{subtitle}</p></div>
    </div>
  );
};

export default TeamCard;
