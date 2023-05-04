import React from 'react';
import styles from './header.module.scss'
import Button from './UI/Button/Button';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const testFunc = async () => {
        await setTimeout(() =>  alert('hello'), 2000);
       await setTimeout(() => navigate('/hello'), 3000);
    }

    return (
        <div className={styles.headerWrapper}>

            <nav className={styles.headerGridLeft}>
                <Link to='/' className={styles.headerLinkBtn}>NY Times Tiles</Link>
            </nav>

            <nav className={styles.headerGridRight}>
             <Link to='/hello'><Button btnStyle='main' title='Login' onClick={testFunc}/></Link>
            </nav>

        </div>
    );
};

export default Header;