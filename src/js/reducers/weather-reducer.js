import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions/weather-actions.js';
import _ from 'lodash';

export function weather(state = {
  isFetching: false,
  city: '',
  country: '',
  weather_image: '',
  weather_description: '',
  weather_number: '',
  wind_dir: '',
  wind_speed: '',
  humidity: '',
  precipitation: ''
}, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_WEATHER:
      if (action.payload.current_observation == undefined) {
        return Object.assign({}, state, {
          isFetching: false,
          city: 'not found'
        });
      } else {
        return Object.assign({}, state, {
          isFetching: false,
          city: (action.payload.current_observation.observation_location.full),
          country: (action.payload.current_observation.observation_location.country),
          weather_image: (action.payload.current_observation.icon_url),
          weather_description: (action.payload.current_observation.weather),
          weather_number: (action.payload.current_observation.temp_c),
          wind_dir: (action.payload.current_observation.wind_dir),
          wind_speed: (action.payload.current_observation.wind_kph),
          humidity: (action.payload.current_observation.relative_humidity),
          precipitation: (action.payload.current_observation.precip_today_in)
        });
      } 
    default:
      return state
  };
};

