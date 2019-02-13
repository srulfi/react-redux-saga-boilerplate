import { AuthTypes } from '../types';

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  success: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.SYNC_USER:
    case AuthTypes.LOGIN:
    case AuthTypes.LOGOUT:
      return {
        ...state,
        loading: true,
        success: false,
        error: false
      };

    case AuthTypes.SYNC_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: action.loggedIn,
        user: action.user,
        success: true,
        error: false
      };

    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user,
        success: true,
        error: false
      };

    case AuthTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: null,
        success: true,
        error: false
      };

    case AuthTypes.SYNC_USER_ERROR:
    case AuthTypes.LOGIN_ERROR:
    case AuthTypes.LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true
      };

    default:
      return state;
  }
};
