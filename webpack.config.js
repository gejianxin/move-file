/* eslint-disable linebreak-style */
const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        emitError: true,
        fix: true,
        formatter: 'stylish',
      },
      exclude: /node_modules/,
      include: [path.resolve(__dirname, 'src')],
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: [path.resolve(__dirname, 'src')],
    },
    ],
  },
};
