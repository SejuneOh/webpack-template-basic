module.exports = {
  presets: ['@babel/preset-env'], // 자바스크립트를 기능을 지원하는 기능
  plugins: [
    ['@babel/plugin-transform-runtime'] // 비동기 처리는 기능을 하는 플러그인
  ]
}