import React from 'react';
import styles from './Footer.module.css'
import { SocialMediaIcons } from '../../assets/data';
const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerContainer}>
                <div className={styles.iconContainer}>
                    {SocialMediaIcons.map((icon, i) =>
                        (<img key={i} src={icon} alt={'SocialLinks'} />)
                    )}
                </div>
                <div className={styles.textContainer}>
                    <p>© 2020 Acme. All right reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;