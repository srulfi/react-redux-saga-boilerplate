import { createSelector } from 'reselect';

const authSelector = state => state.auth;

export const selectLoading = () =>
	createSelector(
		authSelector,
		authState => authState.loading
	);

export const selectLoggedIn = () =>
	createSelector(
		authSelector,
		authState => authState.loggedIn
	);

export const selectSuccess = () =>
	createSelector(
		authSelector,
		authState => authState.success
	);

export const selectError = () =>
	createSelector(
		authSelector,
		authState => authState.error
	);
