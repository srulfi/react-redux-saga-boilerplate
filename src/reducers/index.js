import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  router: connectRouter(history)
});
