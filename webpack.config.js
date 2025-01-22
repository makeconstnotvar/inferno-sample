//let webpack = require('webpack');
let path = require('path');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    //new BundleAnalyzerPlugin(),
  ],
  entry: {
    'app': './src/App.jsx',
  },
  output: {
    clean: false,
    path: path.resolve(__dirname, 'build'),
    filename: 'scripts/script.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                ['@babel/plugin-syntax-jsx'],
                ['@babel/plugin-transform-react-jsx'],
                ['@babel/plugin-transform-react-display-name'],
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: false}]
              ]
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      './node_modules',
      './src'
    ]
  },
  stats: {
    modules: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
  },
}
