import React from 'react'
import FriendsItem from "./FriendsItem/FriendsItem";
import s from './Friends.module.css'

const Friends = (props) => {
    let friendsElements = props.friends.map( f => <FriendsItem name={f.name}/> )
    return(
        <div className={s.blockFriends}>
            <h4>Friends</h4>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;
