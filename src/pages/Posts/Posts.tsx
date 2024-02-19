import React, {FC} from 'react';

import style from "./Posts.module.css";
import Post from "../../components/Post/Post";
const Posts:FC = () => {
    return (
     <div className={style.wrapper}>
       <div className="container">
          <div className={style.list}>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
          </div>
       </div>
  </div>
  );
};

export default Posts;