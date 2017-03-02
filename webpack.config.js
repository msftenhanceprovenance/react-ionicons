'use strict'

let webpack = require('webpack')

let config = {
  entry: './src/index.js',
  output: {
    path: 'lib/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=lib/fonts/[name].[ext]'
      }

    ]
  }
}

module.exports = config