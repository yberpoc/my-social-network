import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.container}>
            <header className={s.header}>
                <img src="https://i1.sndcdn.com/avatars-000464277660-n5mca5-t500x500.jpg" alt="logo"/>
            </header>
        </div>
    );
}

export default Header;
