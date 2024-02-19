import React, {FC} from 'react';

import style from "./Post.module.css";
const Post:FC = () => {
    return (
     <div className={style.post}>
      <div>Post_ID: 1</div>
      <div>Post_Title: Title</div>
      <div>Post_Body: Test </div>
  </div>
  );
};

export default Post;