const path = require('path')
// const webpack = require('webpack')
// const webpackMerge = require('webpack-merge')
// const baseConfig = require('./webpack.base')

// module.exports = webpackMerge(baseConfig, {
//   target: 'node',
//   entry: {
//     app: path.join(__dirname, '../client/server-entry.js'),
//   },
//   externals: Object.keys(require('../package.json').dependencies),
//   output: {
//     filename: 'server-entry.js',
//     libraryTarget: 'commonjs2'
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.API_BASE': '"http://127.0.0.1:3333"'
//     })
//   ]
// })
module.exports = {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../app/server-entry.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        //loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
};



//  webpackMerge(baseConfig, {
//   target: 'node',
//   entry: {
//     app: path.join(__dirname, '../client/server-entry.js'),
//   },
//   externals: Object.keys(require('../package.json').dependencies),
//   output: {
//     filename: 'server-entry.js',
//     libraryTarget: 'commonjs2'
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.API_BASE': '"http://127.0.0.1:3333"'
//     })
//   ]
// })
