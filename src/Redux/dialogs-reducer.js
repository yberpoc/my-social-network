const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newDialogMessage
            }
            state.messages.push(newMessage)
            state.newDialogMessage = ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.newDialogMessage = action.newMessage
            return state
        default:
            return state
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onDialogChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text})

export default dialogsReducer;
