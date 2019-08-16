import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

export default (initialState = {}) => {
	// create the store with two middlewares
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];

	// assemble middlewares
	const enhancers = [applyMiddleware(...middlewares)];

	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		reducers,
		initialState,
		composeEnhancers(...enhancers)
	);

	// kick off root saga
	sagaMiddleware.run(sagas);

	return store;
};
