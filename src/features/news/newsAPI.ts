import axios from "axios";

const NEWS_API = 'https://api.nytimes.com/svc/mostpopular/v2';

export const NEWS_INSTANCE = axios.create({
    baseURL: NEWS_API,
})