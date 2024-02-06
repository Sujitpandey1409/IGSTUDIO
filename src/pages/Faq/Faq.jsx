import React from "react";
import styles from "./Faq.module.css";
import CardTitle from "../../Components.js/CardTitle/CardTitle";
import AccordionExpandDefault from "../../Components.js/Accordion/AccordionExpandDefault";
import { AccordionData } from "../../assets/data";
const faq = () => {
  return (
    <div className={styles.faqWrapper}>
        <div className={styles.titleContainer}>
            <CardTitle content={"FAQ"} />
          <div className={styles.titleDetailContainer}>
            <div>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </div>
        </div>
        </div>    
      <div className={styles.faq}>
        <div className={styles.accordionWrapper}>
        </div>
        <div className={styles.accordionWrapper}>
          {AccordionData.map((el,i)=><AccordionExpandDefault key={i} Q={el} />)}
        </div>
      </div>
    </div>
  );
};

export default faq;
