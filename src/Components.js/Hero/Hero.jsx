import React from 'react';
import styles from './Hero.module.css'

const Hero = () => {
    return (
            <div className={styles.hero}>
                <div className={styles.heroLeft}>
                    <p className={styles.p1}>You don’t have to</p>
                    <p className={styles.p2}>Fight them Alone.</p>
                    <p className={styles.p3}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                    <div className={styles.connectMe}>
                        <input className={styles.mailContainer} placeholder='Enter your eamil address'/>
                        <button className={styles.buttonContainer}>Let's Talk</button>
                    </div>
                </div>
                <img src={require('../../assets/Group 10591.png')} className={styles.heroRight} width={467.71} />
            </div>
    );
}

export default Hero;