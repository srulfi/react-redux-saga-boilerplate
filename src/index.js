import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import * as ServiceWorker from './services/ServiceWorker';
import App from './containers/App';
import configureStore from './configureStore';
import history from './utils/history';
import './index.css';

const initialState = {};
const { store, persistor } = configureStore(initialState, history);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ServiceWorker.unregister();
