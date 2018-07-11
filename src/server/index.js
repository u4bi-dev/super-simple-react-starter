import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import Helmet from 'react-helmet'

import App from '../app'
import routes from '../routes'
import { createServerStore } from '../store'

import { setPrevPath } from '../store/actions'

import { injectHTML } from './providers/html'
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

            const sheet = new ServerStyleSheet()

            const markup = renderToString(sheet.collectStyles(
                <ReduxProvider store={store}>
                    <StaticRouter context={context} location={req.url}>
                        <App />
                    </StaticRouter>
                </ReduxProvider>
            ))

            const styledCss = sheet.getStyleTags()

            const helmet = Helmet.renderStatic()

            context.url ? 
                res.redirect(context.url)
                : 
                res.status(200)
                    .send(injectHTML(
                            assets,
                            helmet.htmlAttributes.toString(),
                            helmet.title.toString(),
                            helmet.meta.toString(),
                            helmet.link.toString(),
                            styledCss,
                            markup, 
                            store.getState()))

        })
    })

export default server
