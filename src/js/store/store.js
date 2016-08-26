import { applyMiddleware, createStore, compose } from 'redux';

import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { requestWeather, fetchWeather } from '../actions/actions.js';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      logger()
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
