import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo />
            <MyPosts
                addPost={props.addPost}
                dispatch={props.dispatch}
            />
        </section>
    );
}

export default Profile;
