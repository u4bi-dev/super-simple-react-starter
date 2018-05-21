'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const resolvePath = relativePath => path.resolve(__dirname, relativePath)
const paths = {
  DIST: resolvePath('dist'),
  INDEX_JS: resolvePath('src/index.js'),
  INDEX_HTML: resolvePath('src/index.html'),
}

const config = {
  entry: paths.INDEX_JS,
  output: {
    path: paths.DIST,
    filename: isProd ? 'static/js/[name].[chunkhash:8].js' : 'static/js/bundle.js',
    chunkFilename: isProd ? 'static/js/[name].[chunkhash:8].chunk.js' : 'static/js/[name].chunk.js',
    publicPath: '/',
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'public', to: paths.DIST }]),
    new HtmlWebpackPlugin({
      template: paths.INDEX_HTML,
      minify: isProd,
    }),
  ],
}

module.exports = config
