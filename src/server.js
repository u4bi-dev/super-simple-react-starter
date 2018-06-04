import React from 'react'
import App from './app'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const styles = Object.keys(assets).reduce((styles, key) => {
  var link = assets[key].css
  return styles + (link ? `<link rel="stylesheet" href="${link}" />` : '')
}, '')

const scripts = Object.keys(assets).reduce((scripts, key) => {
  return scripts + `<script src="${assets[key].js}" defer crossorigin></script>`
}, '')

// console.log(assets)

const html = (title, markup) => {
  return `<!doctype html>
    <html lang="">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      ${styles}
      ${scripts}
    </head>
    <body>
      <div id="root"><!--markup--></div>
    </body>
    </html>`
    .replace(/>(\s|\n)+</g, '><')
    .replace('<!--markup-->', markup)
}

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {}
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    )

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(html('React Starter', markup))
    }
  })

export default server
