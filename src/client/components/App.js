import React from 'react';
import Template from './template';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default () => {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
        
        </Route>
      </Router>
  );
}


