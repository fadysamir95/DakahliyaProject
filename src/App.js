import React , { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/homePage/home';
import Login from './pages/loginPage/login';
import Signup from './pages/signupPage/signup';
import Profile from './pages/profilePage/profile';
import Edit from './pages/profilePage/editPage/edit';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component= {Home} />
          <Route path="/login" component= {Login} />
          <Route path="/signup" component= {Signup} />
          <Route exact path="/profile" component= {Profile} />
          <Route path="/profile/edit" component= {Edit} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
