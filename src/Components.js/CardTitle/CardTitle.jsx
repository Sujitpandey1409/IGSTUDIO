import React from 'react';
import styles from './CardTitle.module.css'
const CardTitle = ({content}) => {
    return ( <p className={styles.textTitle}>{content}</p> );
}
 
export default CardTitle;