import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsService } from "./newsService";
import { RootState } from "../../app/store";
import { IFeed } from "./models/IFeed";

export interface NewsState {
    value: IFeed[] | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: NewsState = {
    value: [],
    status: 'idle',
};

export const getNews = createAsyncThunk(
    'news/getNews',
    async () => {
        const response = await newsService.getNews();

        return response;
    }
);

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
        .addCase(getNews.pending, (state: any) => {
            state.status = "loading";
        })
        .addCase(getNews.fulfilled, (state: any, action: any) => {
            state.status = 'idle';
            [...state.value] = action.payload;
        })
        .addCase(getNews.rejected, (state:any) => {
            state.status = 'failed';
            alert(new Error('Failed News Fetching'));
        });
    },
});

export const selectNews = (state: RootState) => state.news.value;

export default newsSlice.reducer;