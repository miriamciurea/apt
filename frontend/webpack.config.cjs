// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   mode: 'production', // or 'development' depending on your need
//   entry: './src/main.tsx',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/, // TypeScript and React files
//         use: 'ts-loader',  // Use only ts-loader for TypeScript files
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.module\.css$/, // CSS Modules
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true, // Enable CSS modules
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/, // Regular CSS (non-modules)
//         exclude: /\.module\.css$/, // Exclude CSS modules
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     }),
//   ],
//   devServer: {
//     static: './dist',
//     hot: true,
//   },
//   devtool: 'source-map',
//   stats: {
//     errorDetails: true,
//     logging: 'verbose',
//   },
//   cache: false

// };
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Image files
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]', // Output format for images
        },
      },
      {
        test: /\.(mp4|webm|ogg)$/i, // Video files
        type: 'asset/resource',
        generator: {
          filename: 'videos/[hash][ext][query]', // Output format for videos
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
              esModule: true, // This ensures CSS modules use ESModules syntax
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
};
