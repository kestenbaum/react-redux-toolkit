import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models";

export const postsAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: "/posts",
                params: {
                    _limit: limit
                }
            })
        })
    })
})
