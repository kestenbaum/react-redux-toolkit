import React, {FC, useEffect} from 'react';

import style from "./Posts.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { fetchPosts } from '../../store/reducers/ActionCrators';


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
                {JSON.stringify(posts, null, 2)}
          </div>
       </div>
  </div>
  );
};

export default Posts;