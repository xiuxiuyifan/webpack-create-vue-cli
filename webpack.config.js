const path = require("path") //引入node 的path模块
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    console.log(env.NODE_ENV)
    return  {
        //打包模式
        mode: 'development',
            //入口文件
        entry: './src/components/test.js',
        devServer: {//开发服务器的配置
            //端口号配置，默认为8080
            port: 8080,
            //进度条
            progress: true,
            //指定打开浏览器显示的目录，默认为根目录（项目目录）
            contentBase: './dist'
        },
        //打包输出的路径
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'indexTest.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: 'index.html'
            }),
        ],
    }
}
