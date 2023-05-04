import {NEWS_INSTANCE} from './newsAPI'
import { AxiosResponse } from 'axios';
import { IFeed } from './models/IFeed';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => NEWS_INSTANCE.get(url).then(responseBody),
}

export const newsService = {
    getNews: (): Promise<IFeed[]> => requests.get(`/viewed/7.json?api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`).then(res => res.results),
}