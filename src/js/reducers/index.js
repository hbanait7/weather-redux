import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';

import { weather } from './weather-reducer.js';
import { longterm } from './longterm-reducer.js';

const rootReducer = combineReducers({
  weather,
  longterm,
  browser: responsiveStateReducer
});

export default rootReducer;