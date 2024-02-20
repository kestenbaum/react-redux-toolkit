import React, {FC, useEffect} from 'react';

import style from "./Posts.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { fetchPosts } from '../../store/reducers/ActionCrators';
import Post from '../../components/Post/Post';


const Posts:FC = () => {
    const dispatch = useAppDispatch()
    const {posts} = useAppSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
     <div className={style.wrapper}>
       <div className="container">
          <div className={style.list}>
                {posts.map(post => <Post
                    body={post.body}
                    id={post.id}
                    title={post.title}
                />)}
          </div>
       </div>
  </div>
  );
};

export default Posts;