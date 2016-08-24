const apiKey = 'b948a94521a4390a'
const apiUrl = 'http://api.wunderground.com/api/' + apiKey + '/conditions/q/'

export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function requestWeather(data) {
  return {
    type: REQUEST_WEATHER,
    payload: data
  }
}

function receiveWeather(json) {
  return {
    type: RECEIVE_WEATHER,
    payload: json
  }
}


export function fetchWeather(city) {
  const init = {
    method: 'GET'
  }
  return dispatch => {
    dispatch(requestWeather(city))
    return fetch(apiUrl + city + '.json', init)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)))
  }
}





