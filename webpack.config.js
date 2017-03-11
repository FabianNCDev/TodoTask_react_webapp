var path = require('path');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        loader: 'babel-loader',
        options: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: "source-map"
};
