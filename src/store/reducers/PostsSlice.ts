import {IPost} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPosts} from "./ActionCrators";

interface IPostsState {
    isLoading: boolean,
    posts: IPost[],
    error: string
}

const initialState: IPostsState = {
    isLoading: false,
    posts: [],
    error: ""
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
});

export default postsSlice.reducer;
