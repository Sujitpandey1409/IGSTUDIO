import React from 'react';
import styles from './Testimonials.module.css'
import CardTitle from '../../Components.js/CardTitle/CardTitle';
import Card from '../../Components.js/Card/Card';
const Testimonials = () => {
    return ( 
        <div className={styles.testimonialContainer}>
            <div className={styles.title}><CardTitle content={'Why Choose us?'} /></div>
            <div className={styles.cardContainer}>
                <Card icon={'../../assets/Group 19.png'} title={'98% Success Rate'} button={true}/>
                <Card icon={'../../assets/Group 19.png'} title={'100% Success Rate'} button={true} middle={true} />
                <Card icon={'../../assets/Group 19.png'} title={'100% Success Rate'} button={true}/>
            </div>
        </div>
     );
}
 
export default Testimonials;