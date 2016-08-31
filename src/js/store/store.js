import { applyMiddleware, createStore, compose } from 'redux';

import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { requestWeather, fetchWeather } from '../actions/actions.js';
import { responsiveStoreEnhancer } from 'redux-responsive'



const store = createStore(
  rootReducer,
  compose(
    responsiveStoreEnhancer,
    applyMiddleware(
      thunk,
      logger()
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
