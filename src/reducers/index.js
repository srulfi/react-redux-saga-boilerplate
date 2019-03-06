import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from '../utils/history';

import AuthReducer from './AuthReducer';

export default combineReducers({
  router: connectRouter(history),
  auth: AuthReducer
});
