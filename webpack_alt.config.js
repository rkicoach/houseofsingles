const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        filename:"index.html",
        template: "./src/index.html",
      }),
]

if (process.env.SERVE){
    plugins.push(new ReactRefreshWebpackPlugin());
}

let mode = (process.env.NODE_ENV === "prod") ? "production":"development";
let target = (process.env.NODE_ENV === "prod") ? "browserslist":"web";

module.exports = {
    mode:mode,
    target:target,

    entry: {app:"./src/index.js"},

    output: {
        filename:"main.js",
        // output path is required for `clean-webpack-plugin`
        path: path.resolve(__dirname, "dist"),
        // this places all images processed in an image folder
        assetModuleFilename: "images/[hash][ext][query]",
    },

    module:{
        rules:[
        {
            test: /\.(s[ac]|c)ss$/i,
            use: [
                {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: "" },
                },
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ],
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use:
            {
                loader:"babel-loader",
            }
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset",
          },         
        ]
    },

    plugins: plugins,

    resolve: {
        extensions: [".js", ".jsx"],
      },

    devtool:"source-map",
    devServer:{
        contentBase:"./dist",
        hot:true,
    }
}