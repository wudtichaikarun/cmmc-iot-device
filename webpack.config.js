const patch = require('path')

module.exports = {
  conntext: patch.resolve(__dirname, 'src'),
  entry: {
    app: [
      './index.js'
    ]
  },
  module: {
    rules: [
      // JS
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}