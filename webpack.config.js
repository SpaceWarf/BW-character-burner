const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/Index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.scss', '.css'],
    alias: {
      'Actions': path.resolve(path.join(__dirname, './src/actions')),
      'Assets': path.resolve(path.join(__dirname, './src/assets')),
      'Components': path.resolve(path.join(__dirname, './src/components')),
      'Reducers': path.resolve(path.join(__dirname, './src/reducers')),
      'Resources': path.resolve(path.join(__dirname, './src/resources')),
      'Utilities': path.resolve(path.join(__dirname, './src/utilities'))
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|webp)$/i,
        use: [
          "file-loader",
          "webp-loader"
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(path.join(__dirname, "./public/index.html")),
      favicon: path.resolve(path.join(__dirname, "./public/favicon.ico")),
      filename: "index.html"
    })
  ]
};