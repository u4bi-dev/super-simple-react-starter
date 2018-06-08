import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import App from './app'
import { createClientStore } from './store'

const store = createClientStore(window.__state__)

hydrate(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
)

if (module.hot) {
  // module.hot.accept()
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./store/reducers', () => {
    const nextRootReducer = require('./store/reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}
