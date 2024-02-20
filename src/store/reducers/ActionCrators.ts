import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPost} from "../../models";

export const fetchPosts = createAsyncThunk(
    "posts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
            return response.data
        } catch (e) {
            return thunkAPI.fulfillWithValue("Error")
        }
    }
)