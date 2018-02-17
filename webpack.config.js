const patch = require('path')

module.exports = {
  conntext: patch.resolve(__dirname, 'src'),
  entry: {
    app: [
      './index.js'
    ]
  }
}