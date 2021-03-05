import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} like={p.like}/>)

    let newPostElements = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElements.current.value
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.inputBlock}>
                <div>
                    <h3>My posts</h3>
                </div>
                <div>
                    <div>
                        <input ref={newPostElements} onChange={onPostChange} value={props.newPostText} className={s.input}/>
                    </div>
                    <div className={s.btnBlock}>
                        <button onClick={ onAddPost} className={s.btn}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.postsBlock}>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    );
}

export default MyPosts;
