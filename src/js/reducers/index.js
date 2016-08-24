import { combineReducers } from 'redux'

import { weather } from './weather-reducer.js'

const rootReducer = combineReducers({
  weather
})

export default rootReducer