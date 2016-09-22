import { apiKey, weatherUrl } from './api.js';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export function requestWeather() {
  return {
    type: REQUEST_WEATHER
  };
};

export function receiveWeather(json) {
  return {
    type: RECEIVE_WEATHER,
    payload: json
  };
};

export function fetchingWeather(location) {
  const init = {
    method: 'GET'
  };
  return dispatch => {
    dispatch(requestWeather())
    return fetch(weatherUrl + location + '.json', init)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)))
  };
};

// To parse json:
//   return dispatch => {
//     dispatch(requestWeather())
//     return fetch(apiUrl + location + '.json', init)
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//       })
//       // .then(json => dispatch(receiveWeather(json)))
//   };  
// };

// No error was returned from the api. Got an object back. 
// That is the purpose of 
// if (action.payload.current_observation == undefined) {
// in the reducer.


