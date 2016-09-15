import { apiKey } from './api.js';

export const REQUEST_RADAR = 'REQUEST_RADAR';
export const RECEIVE_RADAR = 'RECEIVE_RADAR';

//export const radarUrl = 'http://api.wunderground.com/api/' + apiKey + '/animatedradar/q/' + location + '.gif?newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50';

export function requestRadar() {
  return {
    type: REQUEST_RADAR
  };
};

export function receiveRadar(url) {
  return {
    type: RECEIVE_RADAR,
    payload: url
  };
};

export function fetchingRadar(location) {
  return dispatch => {
    dispatch(requestRadar()) 
    dispatch(receiveRadar('http://api.wunderground.com/api/' + apiKey + '/animatedradar/q/' + location + '.gif?newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50'))
  };
};