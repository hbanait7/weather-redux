import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.js';
import store from './store/store.js';
import { fetchingWeather } from './actions/actions.js';

store.dispatch(fetchingWeather('Toronto' + ', ' + 'Canada'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
