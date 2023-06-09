const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "src"),
  },
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "javascripts/[main]-[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_moudeules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.vue/,
        exclude: /node_modules/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_moudeules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[contenthash][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
          // {
          //     loader: 'file-loader',
          //     options: {
          //         esModule: false,
          //         name: 'images/[name].[ext]',
          //     },
          // },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/[name]-[contenthash].css",
    }),
    new HtmlwebpackPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html",
    }),
    new HtmlwebpackPlugin({
      template: "./src/templates/access.pug",
      filename: "access.html",
    }),
    new HtmlwebpackPlugin({
      template: "./src/templates/menbers/taro.pug",
      filename: "menbers/taro.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
};
