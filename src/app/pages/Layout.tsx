import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;