import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import App from './app'

import { configureStore } from './store'

const store = configureStore(window.__state__)

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