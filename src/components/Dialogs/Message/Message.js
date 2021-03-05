import React from 'react'
import s from './Message.module.css'


const Message = (props) => {

    return (
        <section>
            <div className={s.messages}>
                <div className={s.message}>{props.message}</div>
            </div>
        </section>

    );
}

export default Message;
