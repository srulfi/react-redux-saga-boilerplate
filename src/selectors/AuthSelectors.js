import { createSelector } from 'reselect';

const authSelector = state => state.get('auth');

export const selectLoading = () =>
  createSelector(
    authSelector,
    authState => authState.get('loading')
  );

export const selectLoggedIn = () =>
  createSelector(
    authSelector,
    authState => authState.get('loggedIn')
  );

export const selectSuccess = () =>
  createSelector(
    authSelector,
    authState => authState.get('success')
  );

export const selectError = () =>
  createSelector(
    authSelector,
    authState => authState.get('error')
  );
