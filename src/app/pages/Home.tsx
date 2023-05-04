import React, { useEffect } from 'react';
import {getNews, selectNews} from '../../features/news/newsSlice'
import { useAppDispatch, useAppSelector } from '../hooks';
import Card from '../components/Card';

const Home = () => {

    const news = useAppSelector(selectNews);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    console.log(news);
    

    return (
        <div>
            <h2></h2>
            {news?.map(arr => <Card key={arr.id} abstract={arr.abstract} title={arr.title} imgURL={arr.media[0]?.['media-metadata'][2].url}/>)}
        </div>
    );
};

export default Home;