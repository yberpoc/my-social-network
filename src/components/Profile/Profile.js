import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
            />
        </section>
    );
}

export default Profile;
