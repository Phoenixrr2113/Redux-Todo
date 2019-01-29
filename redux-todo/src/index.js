import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { logger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const middlewareList = [logger];

const enhancer = composeEnhancers(applyMiddleware(...middlewareList));

const store = createStore(rootReducer, enhancer);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	rootElement,
);
