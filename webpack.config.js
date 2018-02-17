const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      'react-hot-loader/patch',
      './index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      // JS
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      // SCSS
      {
        test: /\.scss$/,
        /* working sequent right to left <------
        sass-loader: convert sass to css
        css-loader: css to js module and css hot loader
        postcss-loader: autoprefix
        style-loader: map css to browser
        */
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              module: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          // postcss-loader need config file name postcss.config.js
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          } 
        ]
      }

    ]
  }
}