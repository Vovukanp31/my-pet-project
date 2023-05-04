import React, { useEffect } from 'react';
import {getNews, selectNews} from '../../features/news/newsSlice'
import { useAppDispatch, useAppSelector } from '../hooks';
import Card from '../components/Card';
import styles from './home.module.scss';

const Home = () => {

    const news = useAppSelector(selectNews);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    console.log(news);
    

    return (
        <div className={styles.homePageWrapper}>
            <h1>Top stories from NY Times</h1>
            <div className={styles.newsContainer}>
                {news?.map(arr => <Card key={arr.id} byLine={arr.byline} title={arr.title} imgURL={arr.media[0]?.['media-metadata'][2].url}/>)}
            </div>
        </div>
    );
};

export default Home;