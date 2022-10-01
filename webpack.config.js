let webpack = require('webpack');
let path = require('path');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    //new BundleAnalyzerPlugin(),
  ],
  entry: {
    app: './src/index.js',

  },
  output: {
    clean: false,
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                ["babel-plugin-inferno", {"imports": true}]
              ]
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
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
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
}
