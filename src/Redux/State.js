let render = () => {
    console.log('ddd')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hey, i got what you need', like: 23},
            {id: 2, post: 'Why do you cum, men?', like: 40},
            {id: 3, post: 'Fuck you', like: 140},
            {id: 4, post: 'WHEN U DROP THE UTOPIA???', like: 13431},
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 0,
        post: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    render(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    render(state);
}

export const addMessge = () => {
    let newMessage = {
        message: state.dialogsPage.newDialogMessage
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newDialogMessage = ''
    render(state)
}

export const updateNewMessage = (newMessage) => {
    state.dialogsPage.newDialogMessage = newMessage
    render(state)
}

export const subscribe = (observe) => {
    render = observe
}


export default state;
