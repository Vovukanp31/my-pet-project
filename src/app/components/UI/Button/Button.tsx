import React from 'react';
import styles from './button.module.scss'

type Props = {
    btnStyle: 'main' | 'muted';
    title: string;
    type?: 'submit' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLElement>) => any;
};

const Button = ({btnStyle, title, type, onClick}:Props) => {
    return (
        <button className={`${styles.buttonBase} ${styles[btnStyle]}`}
         onClick={onClick}
         type={type || 'button'}>
            {title}
        </button>
    );
};

export default Button;