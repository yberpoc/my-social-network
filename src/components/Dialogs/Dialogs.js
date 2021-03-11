import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onDialogChangeActionCreator} from "../../Redux/State";

const Dialogs = (props) => {
    debugger;
    let dialogElements = props.addMessage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.addMessage.messages.map(m => <Message message={m.message}/>)



    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onDialogChange = (e) =>{
        let text = e.target.value
        props.dispatch(onDialogChangeActionCreator(text))
    }

    return (
        <section>
            <div className={s.backDialogs}>
                <div>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.inputBlock}>
                        <div className={s.containerInput}>
                            <input  className={s.input}
                                    onChange={ onDialogChange }
                                    value={props.addMessage.newDialogMessage} type="text"/>
                            <button
                                className={s.btn}
                                onClick={ addMessage }
                            >
                                Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;
