import React from 'react';
import {browserHistory} from 'react-router';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';
import './header.less';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginToggled: false,
      action: '',
      user: UserStore.getUser(),
      buttons: [],
      lock: new Auth0Lock('uIm04ZM3E2HcN7mU4wM4qCIio7TxxQFt', 'cymarks.eu.auth0.com')
    }
  }

  _setButtons() {
    let buttons = [];
    if(UserStore.isLoggedIn()) {
      buttons.push({ txt: 'dashboard', classList: 'mark-aim', image: 'mark-aim.png', handler: this.goTo.bind(this, 'dashboard') })
      buttons.push({ txt: 'sign out', classList: 'fa fa-sign-out', handler: this.signOut.bind(this) })
    } else {
      buttons.push({ txt: 'sign in', classList: 'fa fa-sign-in', handler: this.showLock.bind(this) })
    }
    this.setState({ buttons })
  }

  componentDidMount() {
    this._setButtons();
    UserStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({ user: UserStore.getUser() });
    this._setButtons();
  }

  toggleSignin() {
    this.setState({ loginToggled: !this.state.loginToggled });
  }

  goTo(routeName) {
    browserHistory.replace(`/${routeName}`);
  }

  signOut() {
    UserActions.logout();
    browserHistory.replace('/');
  }
  
   showLock() {
    this.state.lock.show({icon: require('../../../assets/images/marks-logo.png')},(err, profile, token) => {
      if(err) console.log(err)
      UserStore.setToken(token);
      console.log(profile);
      
      if(profile.email_verified) {
        console.log('email is verified');
        console.log(profile.email);
        UserActions.signin(profile);
      }
    });
    
  }

  render() {

    let buttons = this.state.buttons.map((btn, index) => {
      return (
        <button key={index} className="button" onClick={btn.handler}>
          <p>
            {btn.image ? <img className={btn.classList}src={require(`../../../assets/images/${btn.image}`) } width="17" /> :
              <i className={btn.classList} aria-hidden="true"></i>}
            {btn.txt}</p>
          <div className="underline"></div>
        </button>
      )
    })

    return (
      <div>
        <ul className="header">
          <li>
            <img src={require('../../../assets/images/marks-logo.png') } onClick={this.goTo.bind(this, '') } width="160" alt="marks logo"/>
          </li>
          <li>
            {buttons}
          </li>
        </ul>
      </div>
    )
  }
}



