import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer_content}>
            <p className={styles.footer_txt}>Розроблено лише для ознайомлення</p>
        </footer>
    );
};

export default Footer;