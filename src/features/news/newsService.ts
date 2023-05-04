import {NEWS_INSTANCE} from './newsAPI'
import { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => NEWS_INSTANCE.get(url).then(responseBody),
}

export const newsService = {
    getNews: (): Promise<[]> => requests.get(`/viewed/7.json?api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`).then(res => res.results),
}