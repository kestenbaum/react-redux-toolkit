import {IPost} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPosts} from "./ActionCrators";

interface IPostsState {
    isLoading: boolean,
    posts: IPost[],
    error: string | null
}

const initialState: IPostsState = {
    isLoading: false,
    posts: [],
    error: null
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: ({addCase}) => {
        const { pending, rejected, fulfilled } = fetchPosts;

        addCase(pending,
            (state) => {
            state.isLoading = true;
            state.error = null;
        });

        // @ts-ignore
        addCase(fulfilled,
            (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.posts = action.payload;
        });

        addCase(rejected,
            (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || "Something went wrong";
        });
    }
});

export default postsSlice.reducer;
