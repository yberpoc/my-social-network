import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageText = React.createRef()

    let addMessage = () => {
        let newMessage = props.dialogsPage.newDialogMessage
        props.addMessge(newMessage)
    }

    let onDialogChange = () =>{
        let text = newMessageText.current.value
        props.updateNewMessage(text)
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
                                    ref={newMessageText}
                                    onChange={ onDialogChange }
                                    value={props.dialogsPage.newDialogMessage
                                    } type="text"/>
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
