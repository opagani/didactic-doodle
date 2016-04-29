// webpack.config.babel.js
//import merge from 'webpack-merge'
//import path from 'path'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event

process.env.BABEL_ENV = TARGET

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'eslint' ],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel?cacheDirectory' ],
        include: PATHS.app
      }
    ]
  }
}

const startConfig = {}

const buildConfig = {}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {})
}

if (TARGET === 'build') {
  module.exports = merge(common, {})
}

//const config = (TARGET === 'start' || !TARGET)
  //? merge(common, startConfig)
  //: merge(common, buildConfig)

//export default config