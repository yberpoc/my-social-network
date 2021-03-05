import React from 'react'
import './index.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <section>
            <Header />
        <div className="app-wrapper">
            <div className='app-nav'>
                <Navbar state={props.state.sideBar} />
            </div>
            <div className="app-wrapper-content">
                    <Route path='/profile' render={ () =>
                        <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                            /> }
                        />
                    <Route path='/dialogs' render={ () => <Dialogs
                        addMessge={props.addMessge}
                        dialogsPage={props.state.dialogsPage}
                        updateNewMessage={props.updateNewMessage}
                    /> }/>
                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
            </div>
        </div>
        </section>
    );
}

export default App;
