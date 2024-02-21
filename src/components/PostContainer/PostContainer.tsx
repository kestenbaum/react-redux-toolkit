import React from 'react';
import {IPost} from "../../models";
import {postsAPI} from "../../service/PostService";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postsAPI.useFetchAllPostsQuery(5);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {posts && posts.map((post: IPost) => <div key={post.id}>{post.title}</div>)}
            {error && JSON.stringify(error)}
        </div>
    );
};

export default PostContainer;