const nodeExternals = require('webpack-node-externals');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

module.exports = {
  entry: path.resolve(__dirname, './server/index.ts'),
  mode: process.env.NODE_ENV,
  name: 'server',
  target: 'node',
  output: {
    publicPath: './',
    path: path.resolve(__dirname, './'),
    filename: 'server.js',
  },
  resolve: {
    extensions: [
      '.webpack-loader.js',
      '.web-loader.js',
      '.loader.js',
      '.js',
      '.ts',
    ],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  externals: [nodeExternals()],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node-modules/,
        use: 'ts-loader',
      },
    ],
  },
};
