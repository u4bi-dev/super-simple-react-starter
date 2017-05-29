'use strict';

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = (process.env.NODE_ENV === 'production')
const sourceMap = false;

const resolvePath = relativePath => path.resolve(__dirname, relativePath)
const paths = {
    appBuild: resolvePath('build'),
    appSrc: resolvePath('src'),
    appIndexJs: resolvePath('src/index.js'),
    appIndexHtml: resolvePath('src/index.html'),
}

/**
 * Configuration
 * Reference: https://webpack.js.org/configuration/
 */
const config = {
    entry: paths.appIndexJs,
    output: {
        path: paths.appBuild,
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: !isProd,
        // There will be one main bundle, and one file per asynchronous chunk.
        filename: isProd ? 'static/js/[name].[chunkhash:8].js' : 'static/js/bundle.js',
        chunkFilename: isProd ? 'static/js/[name].[chunkhash:8].chunk.js' : 'static/js/[name].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {}
    },
    module: {
        rules: [
            // BABEL LOADER
            // Reference: https://github.com/babel/babel-loader
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: paths.appSrc,
                query: {
                    presets: ['env', 'stage-2', 'react']
                }
            },
            // FILE LOADER
            // Reference: https://github.com/webpack/file-loader
            {
                exclude: /\.(html|jsx?|css|json|png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                }
            },
            // URL LOADER
            // Reference: https://github.com/webpack-contrib/url-loader
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                }
            },
            // STYLE LOADERS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: sourceMap,
                                minimize: isProd,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    //require('postcss-flexbugs-fixes'),
                                    autoprefixer({
                                        browsers: ['last 2 versions', '> 1%'],
                                        flexbox: 'no-2009',
                                    }),
                                ],
                            },
                        },
                    ]
                })
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'public', to: paths.appBuild },
        ]),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appIndexHtml,
            minify: isProd ? {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            } : false,
        }),
        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'production') { ... }. 
        new webpack.DefinePlugin({
            "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
        }),

        new ExtractTextPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            allChunks: true,
            disable: !isProd,
        })
    ],
    devServer: {
        // Base path for the serve content.
        contentBase: 'src',
        // Minimize output infomation
        stats: 'minimal',
        // Server port
        port: 8080
    }
}

if (isProd) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false,
            },
            comments: false,
            sourceMap: sourceMap,
        })
    )
}

module.exports = config