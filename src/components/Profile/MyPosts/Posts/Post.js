import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://i1.sndcdn.com/artworks-xxUCWsErW4PzMEoJ-R0MTfg-t500x500.jpg" alt="avatar"/>
                {props.message}
            </div>
            <div className={s.likes}>
                <button className={s.btn}>Like</button>
                {props.like}
            </div>
        </div>
    );
}

export default Post;
