const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', // or 'development' depending on your need
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript and React files
        use: 'ts-loader',  // Use only ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/, // CSS Modules
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true, // Enable CSS modules
            },
          },
        ],
      },
      {
        test: /\.css$/, // Regular CSS (non-modules)
        exclude: /\.module\.css$/, // Exclude CSS modules
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  devtool: 'source-map',
  stats: {
    errorDetails: true,
  },
};
