import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../themes/base.scss';

import Routes from '../../constants/Routes';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import DashboardPage from '../DashboardPage';
import NotFoundPage from '../NotFoundPage';

const App = () => {
	return (
		<Switch>
			<Route path={Routes.HOME} exact component={HomePage} />
			<Route path={Routes.LOGIN} exact component={LoginPage} />
			<Route path={Routes.DASHBOARD} exact component={DashboardPage} />
			<Route component={NotFoundPage} />
		</Switch>
	);
};

export default App;
