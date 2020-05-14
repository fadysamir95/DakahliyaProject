import React , { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, InputGroupText, FormGroup, Label } from 'reactstrap';
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
                <div className="mb-3 mt-4">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" />
                  </InputGroup>
                </div>
                <div className="mb-1" data-validate="Password is required">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" />
                  </InputGroup>
                </div>
                <div className="mb-1 float-right">
                  <a href="#" className="link">Forgot Password ?</a>
                </div>
                <div className="mt-4 mb-2 float-left">
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" />{' '}
                      <span className="text remember">Remember me</span>
                    </Label>
                  </FormGroup>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Sign In
                  </button>
                </div>
                <div className="mb-1 float-right">
                  <span className="text">Don't have an account ? </span><a href="#" className="link">Click here to sign up</a>
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
