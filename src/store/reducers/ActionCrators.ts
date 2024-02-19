import {AppDispatch} from "../index";
import {postsSlice} from "./PostsSlice";

import axios from "axios";

export const fetchPosts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(postsSlice.actions.fetchPosts())
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
        dispatch(postsSlice.actions.fetchPostsSuccess(response.data))
    } catch (e:any) {
        dispatch(postsSlice.actions.fetchPostsError(e.message))
    }
}