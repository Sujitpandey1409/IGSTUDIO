import React from 'react';
import styles from './Testimonials.module.css'
import CardTitle from '../../Components.js/CardTitle/CardTitle';
import Card from '../../Components.js/Card/Card';
import image1 from '../../assets/Group 19.png'
const Testimonials = () => {
    return ( 
        <div className={styles.testimonialContainer}>
            <div className={styles.title}><CardTitle content={'Why Choose us?'} /></div>
            <div className={styles.cardContainer}>
                <Card icon={image1} title={'98% Success Rate'} button={true}/>
                <Card icon={image1} title={'100% Success Rate'} button={true} middle={true} />
                <Card icon={image1} title={'100% Success Rate'} button={true}/>
            </div>
        </div>
     );
}
 
export default Testimonials;