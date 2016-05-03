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
      user: UserStore.getUser(),
      buttons: []
    }
  }

   _setButtons() {
    let buttons = [];
    if(UserStore.isLoggedIn()) {
      buttons.push({txt: 'my marks', classList: 'fa', handler: this.logout.bind(this)})
      buttons.push({txt: 'sign out', classList: 'fa fa-sign-out', handler: this.logout.bind(this)})
    } else {
      buttons.push({txt: 'sign in', classList: 'fa fa-sign-in', handler: this.toggleSignin.bind(this)})
      buttons.push({txt: 'sign up', classList: 'fa fa-user-plus', handler: this.toggleSignup.bind(this)})
    }
    this.setState({buttons})
  }

  componentDidMount() {
    this._setButtons();
    UserStore.addChangeListener(this._onChange.bind(this));
  }
    
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange.bind(this));
  }
    
  _onChange() {
    this.setState({user: UserStore.getUser()});
    this._setButtons();
  }
  
  toggleSignin() {
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

      let buttons = this.state.buttons.map((btn, index) => {
        return (
            <button key={index} className="button" onClick={btn.handler}>
              <p><i className={btn.classList} aria-hidden="true"></i>{btn.txt}</p>
              <div className="underline"></div>
            </button>
          )
      })  

    return (
      <div>
        <ul className="header">
        <li>
          <img src={require('../../../assets/images/marks-logo.png')} width="160" alt="marks logo"/>
          </li>
          <li>
         {buttons}
         </li>
        </ul>
        {!this.state.user.authenticated && (this.state.loginToggled || this.state.signupToggled) ? <UserForm action={this.state.action} /> : <div></div>}
        </div>
    )
    }
}

export default Header