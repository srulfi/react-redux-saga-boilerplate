import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { AuthActions } from '../../actions';
import { AuthSelectors } from '../../selectors';

import Routes from '../../constants/Routes';

class HomePage extends Component {
	componentDidMount() {
		const { syncUser } = this.props;

		syncUser();
	}

	render() {
		const { loggedIn } = this.props;

		if (loggedIn) {
			return <Redirect to={Routes.DASHBOARD} />;
		}

		return (
			<div>
				<h1>Home Page</h1>
				<Link to={Routes.LOGIN}>go to login</Link>
			</div>
		);
	}
}

HomePage.propTypes = {
	loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = () =>
	createStructuredSelector({
		loggedIn: AuthSelectors.selectLoggedIn()
	});

const mapDispatchToProps = dispatch => ({
	syncUser: () => dispatch(AuthActions.syncUser())
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HomePage)
);
