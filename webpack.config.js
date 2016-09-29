var path = require('path')

module.exports = {
  entry: './src/Pace.jsx',
  output: {
    path: './src',
    filename: 'pace.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
