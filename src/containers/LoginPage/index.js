import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthActions } from '../../actions';

class LoginPage extends Component {

	render() {
		const { login, loggedIn } = this.props;

		if (loggedIn) {
			return <Redirect to='/dashboard' />;
		}

		return (
			<div>
		  	<h1>Login Page</h1>
		  	<button onClick={() => login()}>LOGIN</button>
		  </div>
		);
	}
}

LoginPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  loggedIn: state.auth.loggedIn,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(AuthActions.login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);