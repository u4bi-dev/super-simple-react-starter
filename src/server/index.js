import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
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

import * as ddb from '../dynamodb'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const sessionConfig = {
    secret: process.env.SESSION_SECRET || 'secretKEYu4bi-test-1234@#',
    resave: false, 
    saveUninitialized: true
}

const server = express()

server
    .disable('x-powered-by')
    .use(session(sessionConfig))
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .get('/dynamo-create', (req, res) => ddb.call('put', { TableName: 'memos', Item: { userId: 'aa_user_id', memoId: 'aa_memo_id', title: 'title_title' } }).then(e => res.json({ done : true })))
    .get('/dynamo-get', (req, res) => ddb.call('get', { TableName: 'memos', Key: { userId: 'aa_user_id', memoId: 'aa_memo_id' } }).then(e => res.json(e)))
    .get('/mock-users', (req, res) => {
        res.json([ 
            { name : 'AA' }, { name : 'BB' }, { name : 'CC' }, { name : 'DD' } 
        ])
    })
    .get('/*', (req, res) => {

        const context = {}
        const store = createServerStore()
        
        // console.log(req.get('cookie'))
        // console.log(req.session);

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
