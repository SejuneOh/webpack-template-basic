const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  // 시작 진입점
  entry: './src/main.js',
  // output file 경로
  output: {
    // path: "",  빌드할 파일 경로 path.resolve(path1, path2) path1 과 path2를 설정해준다.
    // filename: ""  빌드파일네임
    // 자동으로 dist 파일로 만들어진다. 
    publicPath: '/',
    clean: true  //기존에 만들었던 내용을 삭제해주고 새로 맨들어진다.
  },
  // css
  module: {
    rules: [
      {
        test: /\.s?css$/, //.css .scss 파일 같은 경우에는 사용할 package를 설정한다.
        use: [
          // 역순으로 실행한다.
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader' //첫번째 실행
        ]
      },
      {
        // babel 적용하는 시점
        test: /\.js$/,
        use: [
          'babel-loader',
        ]
      }
    ]
  },
  // 플러그인 활용
  plugins: [
    new HtmlPlugin({
      template: './src/index.html' // 번들링시, 사용할 html의 설정
    }),
    new CopyPlugin({ // 파일이 복사 되는 경로를 말한다.
      patterns: [
        { from: './src/assets' }
      ]
    })
  ],
  // dev server localhost setting
  devServer: {
    host: 'localhost'
  }
}