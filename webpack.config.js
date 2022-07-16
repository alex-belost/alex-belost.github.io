const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'src/index.js'),
    path.resolve(__dirname, 'src/stylesheets/style.scss'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    watchFiles: [ 'src/*' ],
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: [
      {
        directory: path.resolve(__dirname, 'assets'),
        watch: true,
      },
    ],
    client: {
      progress: true,
      overlay: {
        errors: true,
      },
    },
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'src/template.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)/i,
        type: 'asset/resource',
      },
    ],
  },
};
