import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthActions } from '../../actions';

const DashboardPage = () => {
	const { logout, loggedIn } = this.props;

	if (!loggedIn) {
		return <Redirect to="/" />
	}

	return (
		<div>
	  	<h1>Dashboard Page</h1>
	  	<button onClick={() => logout()}>LOGOUT</button>
	  </div>
	);
};

DashboardPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);