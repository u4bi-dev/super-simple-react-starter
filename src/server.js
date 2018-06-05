import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import Layout from './layout'
import routes from './routes'
import createStore from './store'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const styles = Object.keys(assets).reduce((styles, key) => {
  var link = assets[key].css
  return styles + (link ? `<link rel="stylesheet" href="${link}" />` : '')
}, '')

const scripts = Object.keys(assets).reduce((scripts, key) => {
  return scripts + `<script src="${assets[key].js}" defer crossorigin></script>`
}, '')

// console.log(assets)

const html = (title, markup, state) => {
  return `<!doctype html>
    <html lang="">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="root"><!--markup--></div>
      <script><!--state--></script>
      ${scripts}
    </body>
    </html>`
    .replace(/>(\s|\n)+</g, '><')
    .replace('<!--markup-->', markup)
    .replace('<!--state-->', '__state__=' + JSON.stringify(state))
}

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {}
    const store = createStore()

    const dataRequirements = routes
      .filter(route => matchPath(req.url, route))
      .map(route => route.component)
      .filter(comp => comp.prefetch)
      .map(comp => store.dispatch(comp.prefetch()))

    Promise.all(dataRequirements).then(() => {
      const markup = renderToString(
        <ReduxProvider store={store}>
          <StaticRouter context={context} location={req.url}>
            <Layout />
          </StaticRouter>
        </ReduxProvider>
      )

      if (context.url) {
        res.redirect(context.url)
      } else {
        const state = store.getState()
        res.status(200).send(html('React Starter', markup, state))
      }
    })
  })

export default server
