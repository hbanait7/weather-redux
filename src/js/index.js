import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './app.js'
import Store from './store/store.js'

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
