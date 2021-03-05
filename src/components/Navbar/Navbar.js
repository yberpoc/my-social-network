import React from 'react'
import  s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <section className={s.nav}>
            <nav>
                <div className={s.item} >
                    <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to="/dialogs">Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active}  to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active}  to="/music">Music</NavLink>
                </div>
                <div className={s.item} >
                    <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
                </div>
            </nav>
            <Friends friends={props.state.friends}/>
        </section>

    );
}

export default Navbar;
