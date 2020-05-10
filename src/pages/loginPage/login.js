import React , { Component } from 'react';
import './login.css';
import Logo from '../../images/logo.png';
import Background from '../../images/bg.jpg';

class Login extends Component {
  render() {
    return (
      <div className="Login">

        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <div className="form-logo">
                  <img src={Logo} />
                </div>
                <span className="login100-form-title p-b-25">
                  Welcome Back
                </span>
                <div className="wrap-input100 validate-input mb-2">
                  <input className="input100" type="text" name="email" />
                  <span className="label-input100">Email</span>
                </div>
                <div className="wrap-input100 validate-input mb-2" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" />
                  <span className="label-input100">Password</span>
                </div>
                <div className="flex-sb-m w-full p-t-3 p-b-32">
                  <div className="contact100-form-checkbox">
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="#" className="txt1">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="login100-more">
                <img src={Background} style={{width: "100%", height: "100%"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
