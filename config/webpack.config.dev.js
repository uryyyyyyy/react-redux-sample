'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const env = require('./variables/dev')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/Index.tsx',
  output: {
    filename: 'bundle/main.[chunkhash].js',
    path: path.resolve('public'),
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.template.ejs',
      inject: 'body'
    }),
    new webpack.DefinePlugin(env)
  ]
}
