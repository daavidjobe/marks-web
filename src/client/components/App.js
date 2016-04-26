import React from 'react';
import Template from './template';
import Home from './home/Home';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

export default () => {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        </Route>
      </Router>
  );
}


