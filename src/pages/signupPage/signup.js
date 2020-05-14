import React , { Component } from 'react';
import { Input, FormGroup } from 'reactstrap';
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
                <div className=" mt-4 mb-2 input">
                  <FormGroup>
                    <Input type="text" name="fname" placeholder="First Name" />
                  </FormGroup>
                </div>
                <div className="mb-2 input">
                  <FormGroup>
                    <Input type="text" name="lname" placeholder="Last Name" />
                  </FormGroup>
                </div>
                <div className="mb-2 input">
                  <FormGroup>
                    <Input type="email" name="email" placeholder="Email" />
                  </FormGroup>
                </div>
                <div className="mb-2 input">
                  <FormGroup>
                    <Input type="password" name="pass" placeholder="Password" />
                  </FormGroup>
                </div>
                <div className="mb-4 input">
                  <FormGroup>
                    <Input type="password" name="conf-pass" placeholder="Confirm Password" />
                  </FormGroup>
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
