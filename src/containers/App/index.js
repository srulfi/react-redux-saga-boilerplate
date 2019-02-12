import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';

import HomePage from '../HomePage/';
import LoginPage from '../LoginPage/';
import DashboardPage from '../DashboardPage/';
import NotFoundPage from '../NotFoundPage/';

const history = createHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;