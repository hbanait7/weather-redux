import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.js';
import store from './store/store.js';
import { fetchingWeather } from './actions/weather-actions.js';
import { fetchingLongterm } from './actions/longterm-actions.js';
import { fetchingRadar } from './actions/radar-actions.js';

store.dispatch(fetchingLongterm('Toronto' + ', ' + 'Canada'));  
store.dispatch(fetchingWeather('Toronto' + ', ' + 'Canada'));
store.dispatch(fetchingRadar('Toronto' + ', ' + 'Canada'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
