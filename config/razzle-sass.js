const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (baseConfig, { target, dev }, webpack) => {
  const config = baseConfig
  const isServer = target !== 'web'

  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      sourceMap: dev,
      plugins: () => [
        autoprefixer({
          browsers: ['>1%', 'last 2 versions', 'not ie < 9'],
        }),
      ],
    },
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: !dev,
    },
  }

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: dev,
    },
  }

  config.module.rules.push({
    test: /.scss$/,
    use: isServer
      ? [cssLoader, sassLoader]
      : [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          cssLoader,
          postCssLoader,
          sassLoader,
        ],
  })

  if (!isServer && !dev) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[id].[hash:8].css',
      })
    )
  }

  return config
}
