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
         style={{ background: `linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ), url(${isIMG()})`, 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'}}>
            
            <section>{abstract}</section>
            <section>{title}</section>
        </div>
    );
};

export default Card;