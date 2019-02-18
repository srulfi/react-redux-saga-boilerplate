import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import DashboardPage from '../DashboardPage';
import NotFoundPage from '../NotFoundPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/dashboard" exact component={DashboardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
