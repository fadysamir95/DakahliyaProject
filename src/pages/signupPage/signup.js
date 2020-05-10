import React , { Component } from 'react';
import './signup.css';
import Logo from '../../images/logo.png';
import Background from '../../images/bg.jpg';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">

        <div className="limiter">
          <div className="container-signup100">
            <div className="wrap-signup100">
              <form className="signup100-form validate-form">
                <div className="form-logo">
                  <img src={Logo} />
                </div>
                <span className="signup100-form-title p-b-25">
                  Create Account
                </span>
                <div className="wrap-input100 validate-input mb-2">
                  <input className="input100" type="text" name="fname" />
                  <span className="label-input100">First Name</span>
                </div>
                <div className="wrap-input100 validate-input mb-2">
                  <input className="input100" type="text" name="lname" />
                  <span className="label-input100">Last Name</span>
                </div>
                <div className="wrap-input100 validate-input mb-2">
                  <input className="input100" type="email" name="email" />
                  <span className="label-input100">Email</span>
                </div>
                <div className="wrap-input100 validate-input mb-2" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" />
                  <span className="label-input100">Password</span>
                </div>
                <div className="wrap-input100 validate-input mb-2" data-validate="Password is required">
                  <input className="input100" type="password" name="confPass" />
                  <span className="label-input100">Confirm Password</span>
                </div>
                <div className="container-signup100-form-btn">
                  <button className="signup100-form-btn">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="signup100-more">
                <img src={Background} style={{width: "100%", height: "100%"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
