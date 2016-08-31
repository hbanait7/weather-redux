import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';

import { weather } from './weather-reducer.js';

const rootReducer = combineReducers({
  weather,
  browser: responsiveStateReducer
});

export default rootReducer;