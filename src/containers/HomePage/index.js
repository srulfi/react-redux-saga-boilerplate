import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthActions } from '../../actions';

class HomePage extends Component {

	componentDidMount() {
		const { syncUser } = this.props;

		syncUser();
	}

	render() {
		const { loggedIn } = this.props;

		if (loggedIn) {
			return <Redirect to="/dashboard" />;
		}

		return (
			<div>
		  	<h1>Home Page</h1>
		  	<Link to="/login">go to login</Link>
		  </div>
		);
	}
}

HomePage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  syncUser: () => dispatch(AuthActions.syncUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);