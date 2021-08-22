import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';



const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/dialogs'
          render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/profile'
          render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
      </div>
    </div>
  )

}

export default App;