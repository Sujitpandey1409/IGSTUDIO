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
                    <a href='#'><p>Home</p></a>
                    <a href='#Attorneys'><p>Attorneys</p></a>
                    <a href='#Practice-Areas'>Practice Areas</a>
                    <a href='#About-Us'>About Us</a>
                </div>
                <a href='#Contact'> <div className={styles.button}>Contact Now</div></a>
            </div>
        </div>
    );
}

export default Navabar;