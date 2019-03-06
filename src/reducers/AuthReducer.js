import { fromJS } from 'immutable';
import { AuthTypes } from '../types';

const initialState = fromJS({
	loading: false,
	loggedIn: false,
	success: false,
	error: false
});

export default (state = initialState, action) => {
	switch (action.type) {
		case AuthTypes.SYNC_USER:
		case AuthTypes.LOGIN:
		case AuthTypes.LOGOUT:
			return state.merge({
				loading: true,
				success: false,
				error: false
			});

		case AuthTypes.SYNC_USER_SUCCESS:
			return state.merge({
				loading: false,
				loggedIn: action.loggedIn,
				success: true,
				error: false
			});

		case AuthTypes.LOGIN_SUCCESS:
			return state.merge({
				loading: false,
				loggedIn: true,
				success: true,
				error: false
			});

		case AuthTypes.LOGOUT_SUCCESS:
			return state.merge({
				loading: false,
				loggedIn: false,
				success: true,
				error: false
			});

		case AuthTypes.SYNC_USER_ERROR:
		case AuthTypes.LOGIN_ERROR:
		case AuthTypes.LOGOUT_ERROR:
			return state.merge({
				loading: false,
				success: false,
				error: true
			});

		default:
			return state;
	}
};
