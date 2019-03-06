import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { AuthActions } from '../../actions';
import { AuthSelectors } from '../../selectors';

const LoginPage = props => {
  const { login, loggedIn } = props;

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button type="submit" onClick={() => login()}>
        LOGIN
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = () =>
  createStructuredSelector({
    loggedIn: AuthSelectors.selectLoggedIn()
  });

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(AuthActions.login())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
