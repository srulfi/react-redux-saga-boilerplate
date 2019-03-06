import { put, select, delay } from 'redux-saga/effects';

import { AuthTypes } from '../types';

export function* syncUser() {
  try {
    // API session request. delay() to show loader.
    yield delay(500);
    // For now we just get the state from the persisted reducer.
    const loggedIn = yield select(state => state.auth.loggedIn);

    yield put({ type: AuthTypes.SYNC_USER_SUCCESS, loggedIn });
  } catch (error) {
    yield put({ type: AuthTypes.SYNC_USER_ERROR, error });
  }
}

export function* login() {
  try {
    // API login request (email: action.email, password: action.password)
    yield put({ type: AuthTypes.LOGIN_SUCCESS });
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

export function* logout() {
  try {
    // API logout request
    yield put({ type: AuthTypes.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: AuthTypes.LOGOUT_ERROR, error });
  }
}
