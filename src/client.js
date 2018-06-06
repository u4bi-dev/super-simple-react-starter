import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import Layout from './layout'
import { createClientStore } from './store'

const store = createClientStore(window.__state__)

hydrate(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
