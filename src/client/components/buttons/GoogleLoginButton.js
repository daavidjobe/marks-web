import React from 'react';
import UserActions from '../../actions/user-actions';

class GoogleLoginButton extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    gapi.signin2.render('google-signin', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': false,
      'theme': 'light',
      'onsuccess': this.onSignIn
    })
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    UserActions.signin({ email: profile.getEmail(), username: profile.getName() })
  }

  render() {
    return (
     
          <div id="google-signin" className="google-signin"></div>
         
    )
  }
}

export default GoogleLoginButton