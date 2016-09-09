import { REQUEST_RADAR, RECEIVE_RADAR } from '../actions/radar-actions.js';

export function radar(state = {
  isFetching: false,
  radarUrl: ''
}, action) {
  switch (action.type) {
    case REQUEST_RADAR:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_RADAR:
      return Object.assign({}, state, {
        isFetching: false,
        radarUrl: action.payload
      });
    default:
      return state;
  };
};