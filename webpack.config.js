const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = process.env.NODE_ENV === 'development';

const VENDOR = [
  'babel-polyfill',
  'react',
  'react-dom',
  'react-virtualized',
];

module.exports = {
  context: __dirname,
  devtool: DEBUG ? 'cheap-module-eval-source-map' : undefined,
  entry: DEBUG ? {
    bundle: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/app.js',
    ],
    vendor: VENDOR,
  } : {
    app: ['./src/app.js'],
    vendor: VENDOR,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel'],
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.less$/,
        loader: DEBUG ? 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less' : ExtractTextPlugin.extract('style', `css-loader?${JSON.stringify({ // eslint-disable-line
          sourceMap: DEBUG,
          modules: true,
          localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
          minimize: !DEBUG,
        })}!less`),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: !DEBUG,
        drop_debugger: !DEBUG,
        unsafe: true,
        comparisons: !DEBUG,
        booleans: !DEBUG,
        if_return: !DEBUG,
      },
      output: {
        comments: DEBUG,
      },
      sourceMap: DEBUG,
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src/'),
    compress: false,
    hot: true,
    quiet: false,
    inline: true,
    noInfo: true,
    historyApiFallback: true,
    stats: {
      chunks: true,
      chunkModules: false,
      colors: true,
      reasons: true,
      timings: true,
    },
    watchOptions: {
      aggregateTimeout: 250,
      poll: 50,
    },
  },
};
