import React , { Component } from 'react';
import './nav.css';
import Logo from '../../images/logo.png';
import Search from '../../icons/search.svg';
import Notification from '../../icons/bell.svg';
import ChevronDown from '../../icons/chevron-down.svg';

class Nav extends Component {
  render() {
      return (
          <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">

                  <div className='container'>
                      <a className="navbar-brand" href="#"><img src={Logo} className='logo'/></a>

                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon" />
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">

                          <a href='#' className='mr-3 greeting'>Welcome, Mohamed <img className='down' src={ChevronDown} /></a>

                          <a href='#'><img src={Notification} className='mr-3 notification-icon'/></a>

                          <form className="form-inline my-2 my-lg-0">
                              <div className="main">
                                  <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Search Jobs …" />
                                      <a href='#'><img src={Search} className='search-icon'/></a>
                                  </div>
                              </div>
                          </form>

                      </div>
                  </div>

              </nav>
          </div>
      );
  }
}

export default Nav;
