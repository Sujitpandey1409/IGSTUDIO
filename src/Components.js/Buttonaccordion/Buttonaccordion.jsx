import React, { useEffect, useState } from 'react';
import styles from './Buttonaccordion.module.css'
const Buttonaccordion = ({signVal}) => {
    
    return (   <div className={styles.buttonContainer}>{signVal}</div>  );
}
 
export default Buttonaccordion;