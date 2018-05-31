'use strict'

const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const resolvePath = relativePath => path.resolve(__dirname, relativePath)

const paths = {
  DIST: resolvePath('dist'),
  INDEX_JS: resolvePath('src/index.js'),
}

const config = {
  entry: resolvePath('src/index.js'),
  output: {
    path: resolvePath('dist'),
    filename: isProd ? '[name].[chunkhash:8].js' : '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [],
}

module.exports = config
