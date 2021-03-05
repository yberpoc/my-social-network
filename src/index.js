import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addMessge, updateNewMessage, updateNewPostText} from "./Redux/State";
import {addPost} from "./Redux/State";
import {subscribe} from "./Redux/State";

let render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessge={addMessge}
                 updateNewPostText={updateNewPostText}
                 updateNewMessage={updateNewMessage}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

render(state);
subscribe(render);






