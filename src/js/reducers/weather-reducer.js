import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions/actions.js'

export function weather(state = {
  isFetching: false,
  city: '',
  country: ''
}, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        city: action.payload.current_observation.observation_location.full,
        country: action.payload.current_observation.observation_location.country
      })
    default:
      return state
  }
}
