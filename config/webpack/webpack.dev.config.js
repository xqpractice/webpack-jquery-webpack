const path = require('path');
const webpack = require('webpack');
const entry = require('webpack-glob-entry');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: Object.assign(
    {
      'bundle': './src/styles/default.scss'
    },
    entry('./src/js/config/Routes.js')
  ),
  output: {
    path: path.resolve(__dirname, '../../public/assets'),
    filename: 'js/[name].js',
    publicPath: '/static/assets/',
    library: "[name]",
    libraryTarget: 'var'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': 'jQuery',
    'dojo': 'dojo',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: 'node_modules/react/dist/react.js', to: 'js/lib/react.min.js' },
      {from: 'node_modules/react-dom/dist/react-dom.js', to: 'js/lib/react-dom.min.js'},
      {from: 'node_modules/jquery/dist/jquery.js', to: 'js/lib/jquery.min.js'}
    ]),
    new ExtractTextPlugin("css/[name].css", { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, loader: 'babel', include: [ path.join(__dirname, '../../src/') ] },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=10000&name=img/[name].[ext]' },
      { test: /\.(s)*css$/, loader: ExtractTextPlugin.extract("style", "css!resolve-url!sass?sourceMap") },
      { test: /\.(eot|ttf|svg|woff|woff2)$/i, loader: 'file?name=fonts/[hash].[ext]&publicPath=./../' }
    ]
  }
};
