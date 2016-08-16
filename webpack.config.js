var webpack = require('webpack');
var DevENV = process.env.NODE_ENV !== 'production';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

// log to console if in production or development mode (\033[33m == 'yellow', \033[0m == 'reset')
DevENV ? console.log('\033[33m *** You are now in DEVELOPMENT mode *** \033[0m') :
console.log('\033[33m *** You are now creating a PRODUCTION bundle *** \033[0m');

module.exports = {
  devtool: DevENV ? 'inline-sourcemap' : null,
  entry: [
    './src/js/index.js',
  ],
  output: {
    path:  __dirname + '/public',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: './public/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader',
        DevENV ? ['css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap'] :
        ['css-loader', 'postcss-loader', 'sass-loader']),
      },
    ],
  },

  postcss: function () {
    return [precss, autoprefixer];
  },

  plugins: DevENV ? [new ExtractTextPlugin('styles.css')] :
  [
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: false,
      sourcemap: false,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
  ],

};
