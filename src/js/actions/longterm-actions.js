import { apiKey, longtermUrl } from './api.js';

export const REQUEST_LONGTERM = 'REQUEST_LONGTERM';
export const RECEIVE_LONGTERM = 'RECEIVE_LONGTERM';

export function requestLongterm() {
  return {
    type: REQUEST_LONGTERM
  };
};

export function receiveLongterm(json) {
  return {
    type: RECEIVE_LONGTERM,
    payload: json
  };
};

export function fetchingLongterm(location) {
  const init = {
    method: 'GET'
  };
  return dispatch => {
    dispatch(requestLongterm())
    return fetch(longtermUrl + location + '.json', init)
      .then(response => response.json())
      .then(json => dispatch(receiveLongterm(json)))
  };
};
