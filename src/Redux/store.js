import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)

    }
}
//Типа Redux, состояние всех данных, совокупность методов

export default store;
