import React from 'react';
import styles from './Navabar.module.css'

const Navabar = () => {
    return (
        <div className={styles.navabarContainer}>
            <div className={styles.navabar}>
                <div className={styles.logo}>
                    <img src={require('../../assets/Vector.png')} alt='logo' width={30.41} />
                    <p>IGSTUDIO</p>
                </div>
                <div className={styles.pageNav}>
                    <p>Home</p>
                    <p>Attorneys</p>
                    <p>Practice Areas</p>
                    <p>About Us</p>
                </div>
                <div className={styles.button}><p>Contact Now</p></div>
            </div>
        </div>
    );
}

export default Navabar;