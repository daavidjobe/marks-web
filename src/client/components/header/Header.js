import React from 'react';
import './header.less';
import UserForm from '../forms/UserForm';

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loginToggled: false,
      signupToggled: false,
      action: ''
    }
  }
  
  
  toggleLogin() {
    this.setState({
      loginToggled: true,
      action: 'sign in',
      signupToggled: false
    });
  }
  
  toggleSignup() {
    console.log('hey');
    this.setState({
      signupToggled: true,
      action: 'sign up',  
      loginToggled: false
    });
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
        {this.state.loginToggled || this.state.signupToggled ? <UserForm action={this.state.action} /> : <div></div>}
        </div>
    )
    }
}

export default Header