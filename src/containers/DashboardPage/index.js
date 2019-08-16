import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { AuthActions } from '../../actions';
import { AuthSelectors } from '../../selectors';

import Routes from '../../constants/Routes';

const DashboardPage = props => {
	const { logout, loggedIn } = props;

	if (!loggedIn) {
		return <Redirect to={Routes.HOME} />;
	}

	return (
		<div>
			<h1>Dashboard Page</h1>
			<button type="submit" onClick={() => logout()}>
				LOGOUT
			</button>
		</div>
	);
};

DashboardPage.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};

const mapStateToProps = () =>
	createStructuredSelector({
		loggedIn: AuthSelectors.selectLoggedIn()
	});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(AuthActions.logout())
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(DashboardPage)
);
