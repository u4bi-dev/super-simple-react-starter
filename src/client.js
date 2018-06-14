import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import App from './app'
import { createClientStore } from './store'

const store = createClientStore(window.__state__)

const doHydrate = () =>
  hydrate(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root')
  )

doHydrate()

if (module.hot) {
  module.hot.accept('./app', doHydrate)
}

// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('./store/reducers', () => {
//     const nextRootReducer = require('./store/reducers/index')
//     store.replaceReducer(nextRootReducer)
//   })
// }
