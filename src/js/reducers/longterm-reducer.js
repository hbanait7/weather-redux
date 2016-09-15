import { REQUEST_LONGTERM, RECEIVE_LONGTERM } from '../actions/longterm-actions.js';
import _ from 'lodash';

export function longterm(state = {
  isFetching: false,
  longterm: {}
}, action) {
  switch (action.type) {
    case REQUEST_LONGTERM:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_LONGTERM: 
      return Object.assign({}, state, {
        isFetching: false,
        longterm: _.get(action, 'payload.forecast.simpleforecast')
      });
    default:
      return state
  };
};