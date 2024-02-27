import React from 'react';
import {IPost} from "../../models";
import Post from "../Post/Post";
import {postsAPI} from "../../service/PostService";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postsAPI.useFetchAllPostsQuery(5);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {posts && posts.map((post: IPost) => <Post key={post.id} {...post}/>) }
            {error && JSON.stringify(error)}
        </div>
    );
};

export default PostContainer;