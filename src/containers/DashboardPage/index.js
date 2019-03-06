import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { AuthActions } from '../../actions';
import { AuthSelectors } from '../../selectors';

const DashboardPage = props => {
  const { logout, loggedIn } = props;

  if (!loggedIn) {
    return <Redirect to="/" />;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
