const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const ModuleFederationPlugin =
  require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader"
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <body>
            <div id="app"></div>
          </body>
        </html>
      `,
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        remoteApp:
          "remoteApp@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        vue: {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
};
