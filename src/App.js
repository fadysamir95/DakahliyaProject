import React , { Component } from 'react';
import '../src/vendor/bootstrap/bootstrap.css';
import '../src/vendor/util/util.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/homePage/home';
import Login from './pages/loginPage/login';
import Signup from './pages/signupPage/signup';
import Profile from './pages/profilePage/profile';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component= {Home} />
          <Route path="/login" component= {Login} />
          <Route path="/signup" component= {Signup} />
          <Route path="/profile" component= {Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
