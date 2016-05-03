import React from 'react';
import {browserHistory} from 'react-router';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';
import UserForm from '../forms/UserForm';
import './header.less';

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loginToggled: false,
      signupToggled: false,
      action: '',
      user: {}
    }
  }
  
  componentDidMount() {
        UserStore.addChangeListener(this._onChange.bind(this));
    }
    
    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange.bind(this));
    }
    
    _onChange() {
        this.setState({user: UserStore.getUser()});
        console.log(this.state.user.email + " is the user");
    }
  
  toggleLogin() {
    this.setState({
      loginToggled: !this.state.loginToggled,
      action: 'sign in',
      signupToggled: false
    });
  }
  
  toggleSignup() {
    this.setState({
      signupToggled: !this.state.signupToggled,
      action: 'sign up',  
      loginToggled: false
    });
  }
  
  logout() {
    UserActions.logout();
  }
  
  
    render() {
      
      let buttons = UserStore.isLoggedIn() ? 
          <li><button className="button" onClick={this.logout.bind(this)}>
            <p><i className="fa fa-sign-out" aria-hidden="true"></i>sign out</p>
            <div className="underline"></div>
            </button></li> : (<li>
           <button className="button" onClick={this.toggleLogin.bind(this)}>
            <p><i className="fa fa-sign-in" aria-hidden="true"></i>sign in</p>
            <div className="underline"></div>
            </button>
         
           <button className="button" onClick={this.toggleSignup.bind(this)}>
            <p><i className="fa fa-user-plus" aria-hidden="true"></i>sign up</p>
            <div className="underline"></div>
            </button>
          </li>);
          
    return (
      <div>
        <ul className="header">
        <li>
          <img src={require('../../../assets/images/marks-logo.png')} width="160" alt="marks logo"/>
          </li>
         {buttons}
        </ul>
        {!this.state.user.authenticated && (this.state.loginToggled || this.state.signupToggled) ? <UserForm action={this.state.action} /> : <div></div>}
        </div>
    )
    }
}

export default Header