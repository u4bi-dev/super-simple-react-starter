import App from './components/App'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const html = (title, markup) => {
  return `<!doctype html>
    <html lang="">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Welcome to Razzle</title>
      ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
      ${
        process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
    </head>
    <body>
      <div id="root"><!--MARKUP--></div>
    </body>
    </html>`
    .replace(/>(\s|\n)+</g, '><')
    .replace('<!--MARKUP-->', markup)
}

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    console.log(process.env.RAZZLE_PUBLIC_DIR)
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
