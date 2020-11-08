module.exports = {
  plugins: [{ plugin: require('@semantic-ui-react/craco-less') }],
  webpack: {
    module: {
      rules: [
        {
          options: {
            url: false
          }
        }
      ]
    }
  }
}