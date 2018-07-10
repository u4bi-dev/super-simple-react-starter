import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import App from '../app'
import routes from '../routes'
import { createServerStore } from '../store'

import { setPrevPath } from '../store/actions'

import html from './providers/html'
import promises from './providers/promises'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', (req, res) => {

        const context = {}
        const store = createServerStore(req)

        store.dispatch(setPrevPath(req.url))

        Promise.all(promises(routes, req.url, store)).then(_ => {

            const markup = renderToString(
                <ReduxProvider store={store}>
                    <StaticRouter context={context} location={req.url}>
                        <App />
                    </StaticRouter>
                </ReduxProvider>
            )

            context.url ? res.redirect(context.url) : res.status(200).send(html(assets, 'React Starter', markup, store.getState()))

        })
    })

export default server
