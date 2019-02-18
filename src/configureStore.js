import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import ReduxPersist from './config/ReduxPersist';
import reducers from './reducers';
import sagas from './sagas';

export default (initialState = {}, history) => {
  // create the store with two middlewares
  // 1. sagaMiddleware: makes redux-sagas work
  // 2. routerMiddleware: syncs the location/URL path to the state
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  // assemble middlewares
  const enhancers = [applyMiddleware(...middlewares)];

  let finalReducers = reducers;

  // if rehydration is on use persistReducer
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    finalReducers,
    initialState,
    composeEnhancers(...enhancers)
  );

  // kick off root saga
  sagaMiddleware.run(sagas);

  return {
    persistor: persistStore(store),
    store
  };
};
