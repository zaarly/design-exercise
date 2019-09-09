const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(jpe?g|png|gif|ico)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "assets/img/[hash].[ext]",
              publicPath: "/"
            }
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                require("imagemin-gifsicle")({
                  interlaced: false
                }),
                require("imagemin-mozjpeg")({
                  progressive: true,
                  arithmetic: false
                }),
                require("imagemin-pngquant")({
                  floyd: 0.5,
                  speed: 2
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "assets/img/[hash].svg",
              publicPath: "/"
            }
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                require("imagemin-svgo")({
                  plugins: [{ removeTitle: true }, { convertPathData: false }]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[hash].[ext]",
              publicPath: "/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[contenthash].css",
      chunkFilename: "assets/css/[contenthash].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
    // new CleanWebpackPlugin([
    //     path.resolve(__dirname, "dist"),
    // ]),
  ],
  optimization: {
    splitChunks: {
      chunks: "async"
    },
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
