const path = require('path')
const webpack = require('webpack')
// const webpackMerge = require('webpack-merge')
// const baseConfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')
// const NameAllModulesPlugin = require('name-all-modules-plugin')

// const cdnConfig = require('../app.config').cdn

// const isDev = process.env.NODE_ENV === 'development'

// const config1 = webpackMerge(baseConfig, {
//   entry: {
//     app: path.join(__dirname, '../app/app.js'),
//   },
//   output: {
//     filename: '[name].[hash].js',
//   },
//   plugins: [
//     new HTMLPlugin({
//       template: path.join(__dirname, '../client/template.html')
//     }),
//     new HTMLPlugin({
//       template: '!!ejs-compiled-loader!' + path.join(__dirname, '../client/server.template.ejs'),
//       filename: 'server.ejs'
//     })
//   ]
// })

// if (isDev) {
//   config.devtool = '#cheap-module-eval-source-map'
//   config.entry = {
//     app: [
//       'react-hot-loader/patch',
//       path.join(__dirname, '../client/app.js')
//     ]
//   }
//   config.devServer = {
//     host: '0.0.0.0',
//     compress: true,
//     port: '8888',
//     hot: true,
//     overlay: {
//       errors: true
//     },
//     publicPath: '/public/',
//     historyApiFallback: {
//       index: '/public/index.html'
//     },
//     proxy: {
//       '/api': 'http://localhost:3333'
//     }
//   }
//   config.plugins.push(new webpack.HotModuleReplacementPlugin())
// } else {
//   config.entry = {
//     app: path.join(__dirname, '../client/app.js'),
//     vendor: [
//       'react',
//       'react-dom',
//       'react-router-dom',
//       'mobx',
//       'mobx-react',
//       'axios',
//       'query-string',
//       'dateformat',
//       'marked'
//     ]
//   }
//   config.output.filename = '[name].[chunkhash].js'
//   config.output.publicPath = cdnConfig.host
//   config.plugins.push(
//     new webpack.optimize.UglifyJsPlugin(),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor'
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'manifest',
//       minChunks: Infinity
//     }),
//     new webpack.NamedModulesPlugin(),
//     new NameAllModulesPlugin(),
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('production')
//       }
//     }),
//     new webpack.NamedChunksPlugin((chunk) => {
//       if (chunk.name) {
//         return chunk.name
//       }
//       return chunk.mapModules(m => path.relative(m.context, m.request)).join('_')
//     })
//   )
// }

// const config = webpackMerge(baseConfig, {
//   entry: {
//     app: path.join(__dirname, '../app/app.js'),
//   },
//   output: {
//     filename: '[name].[hash].js',
//   }
// });
const config =  {
  entry: {
    app: path.join(__dirname, '../app/app.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
    filename: '[name].[hash].js',
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
  },
   plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../app/index.tmpl.html')
    })
  ]
};
if(process.env.NODE_ENV == 'dev') {
  config.devServer = {
    host: '0.0.0.0',
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    //hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
}
module.exports = config