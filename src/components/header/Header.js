import React from 'react';
import styles from "./Header.module.scss"
import logo from "../../img/galaxy_logo.png"
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header_wrapper}>
            <section className={styles.header_content}>
                <div className={styles.header_logo}>
                    <img className={styles.header_logo_img} alt="Space around us" src={logo}/>
                    <p className={styles.header_logo_text}>Space <br/> around</p>
                </div>
                <div className={styles.header_nav}>
                    <ul>
                        {props.navigation.map((elem, index) => {
                            if (elem.flag){
                                return <li key={index} className={styles.header_nav_li}><Link to={elem.link}>{elem.title}</Link></li>
                            }
                        })}
                    </ul>
                </div>
            </section>
        </header>
    );
};

export default Header;