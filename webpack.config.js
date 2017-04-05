const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './client/src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ],
    loaders: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
          // loaders: ["react-hot", 'babel-loader'],
          // query: {
          //    presets : ['es2015', 'react']
          // }
      },
      {
          test: /\.html$/,
          loader: "file?name=[name].[ext]"
      }
  ]
  }
}
