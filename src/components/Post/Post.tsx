import React, {FC} from 'react';
import { IPost } from '../../models';

import style from "./Post.module.css";

const Post:FC<IPost> = ({body, id, title}) => {
    return (
     <div className={style.post}>
      <div>Post_ID: {id}</div>
      <div>Post_Title: {title}</div>
      <div>Post_Body: {body} </div>
  </div>
  );
};

export default Post;