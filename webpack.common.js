const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const fs = require('fs')


function getFilePathObj(jsPath){
  let jsFileArr = fs.readdirSync(path.resolve(__dirname,jsPath))
  .filter(fileName => fileName.endsWith('.js'))
  let obj = {}
  for(let i = 0;i<jsFileArr.length;i++){
    let fileName = jsFileArr[i]
    let key = fileName.substr(0, fileName.lastIndexOf('.'))
    obj[key] = jsPath + fileName
  }
  return obj
}



let jsPath = './src/entry-js/'

//入口对象
let entryObj = getFilePathObj(jsPath)
console.log(entryObj)

module.exports = {
  entry: {
    a:'./src/entry-js/a.js',
    b:'./src/entry-js/b.js',
    app:'./src/main.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['a'], 
      title: 'a',
      filename: 'a.html',
      template: './src/entry-html/a.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['b'],
      title: 'b',
      filename: 'b.html',
      template: './src/entry-html/b.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      title: 'vue',
      filename: 'index.html',
      template: 'index.html'
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
};