import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App';
import Subscriptions from './subscriptions/Subscriptions';
import Stream from './streams/Stream';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Stream} />
      <Route path="/subscriptions" component={Subscriptions} />
    </Route>
  </Router>,
  document.getElementById('root')
);
