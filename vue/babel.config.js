module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
