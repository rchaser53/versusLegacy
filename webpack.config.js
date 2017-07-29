const path = require('path')

module.exports = {
  entry: {
    index: "./forWebpack/index.js"
  },
  output: {
    path: path.resolve(__dirname, "lib/"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "html?minimize"
      }
    ]
  }
};