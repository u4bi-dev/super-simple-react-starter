'use strict'

const razzleBase = require('./config/razzle-base')
const razzleSass = require('./config/razzle-sass')
const razzleInlineSvg = require('./config/razzle-inline-svg')

module.exports = {
  modify(defaultConfig, { target, dev }, webpack) {
    let config = defaultConfig

    config = razzleBase(config, { target, dev }, webpack)
    config = razzleSass(config, { target, dev }, webpack)
    config = razzleInlineSvg(config, { target, dev }, webpack)

    return config
  },
}
