import React from 'react';
import auth from '../auth/auth';
import Template from './template';
import Home from './home/Home';
import UserDashboard from './dashboard/UserDashboard';
import UserStore from '../stores/user-store';
import MarkStore from '../stores/mark-store';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

class App extends React.Component {
  
  componentDidMount() {
  
  }
  
  requireAuth(nextState, replace) {
    console.log('route accepted')
    if (!UserStore.isLoggedIn()) {
      console.log('route NOT accepted')
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
  
  render() {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="dashboard" component={UserDashboard} onEnter={this.requireAuth.bind(this)} />
        </Route>
      </Router>
  );
  }
}

export default App


