import React from 'react';
import styles from './card.module.scss';
import background from '../assets/images/no-image.png'

type Props = {
    imgURL?: string;
    title: string;
    abstract: string;
}

const Card = ({imgURL, title, abstract}:Props) => {

    const isIMG = () => imgURL ? imgURL : background;

    return (
        <div className={styles.cardWrapper}
         style={{backgroundImage: `url(${isIMG()})`, background: `rgba(3, 3, 3, 0.389)`}}>

            <section>{abstract}</section>
            <section>{title}</section>
            
        </div>
    );
};

export default Card;