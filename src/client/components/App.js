import React from 'react';
import Template from './template';
import Home from './home/Home';
import UserDashboard from './dashboard/UserDashboard';
import UserStore from '../stores/user-store';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

class App extends React.Component {  
  
  requireAuth(nextState, replace) {
    if (!UserStore.isLoggedIn()) {
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
        <Route path="dashboard/:email" component={UserDashboard} onEnter={this.requireAuth.bind(this)} />
        </Route>
      </Router>
  );
  }
}

export default App


