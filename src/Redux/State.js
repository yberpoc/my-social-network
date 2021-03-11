// Переменные для dispatch
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
// Переменные для dispatch

//Типа Redux, состояние всех данных, совокупность методов
let store = {
    _state: { //Объекты данных
        profilePage: {
            posts: [
                {id: 1, post: 'WHEN U DROP THE UTOPIA???', like: 13431},
                {id: 2, post: 'Hey, i got what you need', like: 23},
                {id: 3, post: 'Why do you cum, men?', like: 40},
                {id: 4, post: 'Fuck you', like: 140},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Travis'},
                {id: 2, name: 'Kendrick'},
                {id: 3, name: 'Kanye'},
                {id: 4, name: 'Smoke'},
                {id: 5, name: 'NWA'},
                {id: 6, name: 'Drake'},
            ],
            messages: [
                {message: "it's lit"},
                {message: "i'm a god"},
                {message: "i gonna press my life"},
                {message: "Hope i make it outta here"},
                {message: "I don't give a shit"},
                {message: "Gods plan"},
            ],
            newDialogMessage: ''
        },
        sideBar: {
            friends: [
                {name: 'Kanye'},
                {name: 'Travis'},
                {name: 'Drake'},
                {name: 'Eminem'},
            ]
        }
    },
    _callSubscriber (){ //Временная заглушка
        console.log('ddd')
    },

    getState() {
        return this._state
    },

    subscribe(observe) { //Подписка, получение запроса на перерендер страницы
        this._callSubscriber = observe
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 0,
                post: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                message: this._state.dialogsPage.newDialogMessage
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newDialogMessage = ''
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newDialogMessage = action.newMessage;
            this._callSubscriber(this._state)
        }
    }
}
//Типа Redux, состояние всех данных, совокупность методов

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onDialogChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text})

export default store;
