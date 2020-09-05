const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

const filename = (ext) =>
  isDevelopment
    ? `static/${ext}/[name].${ext}`
    : `static/${ext}/[name].[contenthash:8].${ext}`;
const chunkname = (ext) =>
  isDevelopment
    ? `static/${ext}/[name].chunk.${ext}`
    : `static/${ext}/[name].[contenthash:8].chunk.${ext}`;

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDevelopment,
        reloadAll: true,
      },
    },
    {
      loader: 'css-loader',
    },
  ];

  if (extra) loaders.push(extra);
  return loaders;
};

const babelOptions = (preset) => {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
    compact: true,
  };

  if (preset) options.presets.push(preset);
  return options;
};

const optimizationOptions = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProduction) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const reactModuleOptions = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions('@babel/preset-react'),
    },
  ];

  return loaders;
};

const pluginsList = () => {
  const plugins = [
    new Dotenv(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: isProduction,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/favicon.ico',
          to: path.resolve(__dirname, 'client/build'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
      chunkFilename: chunkname('css'),
    }),
  ];

  return plugins;
};

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'client/src'),
  entry: './app/index.tsx',
  output: {
    publicPath: '/',
    filename: filename('js'),
    path: path.resolve(__dirname, 'client/build'),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'client/src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  optimization: optimizationOptions(),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'build'),
    hot: isDevelopment,
    port: 4200,
  },
  devtool: isDevelopment ? 'source-map' : '',
  plugins: pluginsList(),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        use: reactModuleOptions(),
      },
      {
        test: /\.ts$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
            compact: true,
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node-modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        options: {
          name: 'static/media/[name].[ext]',
        },
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        options: {
          name: 'static/fonts/[name].[ext]',
        },
        loader: 'file-loader',
      },
    ],
  },
};
