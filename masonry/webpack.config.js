
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    name: 'rollingMenu',
    mode: 'development',
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    entry: {
      app: ['./index'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              targets: {
                browsers: ['> 5% in KR'],
              },
              debug: true,
            }], '@babel/preset-react'],
            plugins: [],
          },
        },
        {
          test: /\.jpg?/,
          loader: 'file-loader',
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ["dist"],
      }),
      new HtmlWebpackPlugin({
        template: "./index.html", 
      }),
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
    },
    devServer: {
      hot: true,
  },
}