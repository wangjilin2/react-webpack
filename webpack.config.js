const { resolve } = require("path");

// npm i html-webpack-plugin -D
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "dist"),
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,

      },
      {
        test: /\.css$/,
        // 要使用多个loader处理用use
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        // 要使用多个loader处理用use
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 处理不了html中的img标签图片
        test: /\.(jpg|png|gif)$/,
        // npm i url-loader file-loader -D
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          // esModule:false // url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs，解析时会出问题：[object Module],关闭es6模块化
          name: "[hash:5].[ext]", //重命名，ext取文件原来扩展名
          outputPath: "image",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader", // 处理html文件中的img图片
      },
      // 打包其它资源
      {
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[hash:5].[ext]",
          outputPath: "media",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
//   resolve: {
//     extensions: [".js", ".json", ".jsx", ".css",".less"],
// },
  mode: "development",
  // 开发服务器，devServer：用来自动化，(自动编译，自动打开浏览器，自动刷新浏览器)
  // 启动devServer指令为：webpack-dev-server(npm i webpack-dev-server -D)
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, "dist"),
    //启动gzip压缩
    compress: true,
    //端口号
    port: 3000,
    // 自动打开浏览器
    open: true,
    historyApiFallback: true
  },
};
