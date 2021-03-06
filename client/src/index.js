import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';

import Subscriptions from './subscriptions/Subscriptions';
import { subscriptions as subscriptionReducer } from './subscriptions/reducers';

import Stream from './streams/Stream';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let emptyState = {
  subscriptions: {
    elements: []
  },
};

let store = createStore(subscriptionReducer, emptyState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/subscriptions" component={Subscriptions} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
