const apiKey = 'b948a94521a4390a';
const apiUrl = 'http://api.wunderground.com/api/' + apiKey + '/conditions/q/';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export function requestWeather() {
  return {
    type: REQUEST_WEATHER
  };
};

function receiveWeather(json) {
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
    return fetch(apiUrl + location + '.json', init)
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




