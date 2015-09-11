var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/scripts/app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.jpg$/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
