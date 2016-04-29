import React from 'react';
import './header.less';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loginToggled: false,
      signupToggled: false
    }
  }
  
  
  toggleLogin() {
    this.setState({loginToggled: !this.state.loginToggled, signupToggled: false});
  }
  
  toggleSignup() {
    this.setState({signupToggled: !this.state.signupToggled, loginToggled: false});
  }
  
    render() {
    return (
      <div>
        <ul className="header">
        <li>
          <img src={require('../../../assets/images/marks-logo.png')} width="160" alt="marks logo"/>
          </li>
          <li>
           <button className="button" onClick={this.toggleLogin.bind(this)}>
            <p><i className="fa fa-sign-in" aria-hidden="true"></i>sign in</p>
            <div className="underline"></div>
            </button>
          </li>
          <li>
           <button className="button" onClick={this.toggleSignup.bind(this)}>
            <p><i className="fa fa-user-plus" aria-hidden="true"></i>sign up</p>
            <div className="underline"></div>
            </button>
          </li>
        </ul>
        {this.state.loginToggled ? <LoginForm /> : <div></div>}
        {this.state.signupToggled ? <SignupForm /> : <div></div>}
        </div>
    )
    }
}

export default Header