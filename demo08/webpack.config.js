var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var webpack=require("webpack");
module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  Plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        Plugins: [
          HtmlWebpackPlugin({
            title: "Webpack-demo08",
            filename: "index.html",
          }),
          OpenBrowserPlugin({
            url: "http://localhost:8080",
          }),
        ],
      },
    }),
  ],
};
