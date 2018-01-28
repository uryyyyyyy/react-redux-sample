'use strict';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/Index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  }
};