import { IPost } from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IPostsState {
    isLoading: boolean,
    posts: IPost[],
    error: string
};

const initialState: IPostsState = {
    isLoading: false,
    posts: [],
    error: ""
};

export const postsSlice = createSlice({
    initialState,
    name: "posts",
    reducers: {
        fetchPosts (state) {
            state.isLoading = true
        },
        
        fetchPostsSuccess (state, action: PayloadAction<IPost[]>) {
            state.isLoading = true
            state.posts = action.payload
            state.error = ""
        },
        
        fetchPostsError (state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
});

export const {fetchPosts, fetchPostsSuccess, fetchPostsError} = postsSlice.actions;
export default postsSlice.reducer;
