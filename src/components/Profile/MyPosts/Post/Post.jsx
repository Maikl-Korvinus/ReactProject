import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/8ee21821bfa041ce285b476e57835a56.jpg' />
      {props.message}
      <div >
        {props.number}
        <span > like</span>
      </div>
    </div>
  )
}

export default Post;