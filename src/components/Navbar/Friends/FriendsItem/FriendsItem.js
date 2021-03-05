import React from 'react'
import s from './FriendsItem.module.css'

const FriendsItem = (props) => {

    return(
        <div className={s.friendsItem}>
            <img className={s.img} src="https://i.pinimg.com/originals/7b/e0/4f/7be04f1d514b2583dc5b99fb22005ccd.jpg" alt="ava"/>
            <h5>{props.name}</h5>
        </div>
    );
}

export default FriendsItem;
