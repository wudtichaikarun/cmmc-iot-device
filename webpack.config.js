const path = require('path')
const webpack = require('webpack')

const context = path.resolve(__dirname, 'src')

module.exports = {
  devtool: 'eval-source-map',
  context,
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
  resolve: {
    alias: {
      Lib: path.resolve(context, 'lib'),
      Features: path.resolve(context, 'features'),
      Theme: path.resolve(context, 'theme')
    },
    extensions: [".js", ".json", ".scss"]
  },
  module: {
    rules: [
      // ESLINT
      { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader' },
      // JS
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      // IMAGE
      { test: /\.(png|jpg|gif)$/, exclude: /node_modules/, loader: 'file-loader'},
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
              module: false,
              sourceMap: true,
              minimize: false,
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
}