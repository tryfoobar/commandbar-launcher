module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CommandBarLauncher',
      externals: {
        react: 'React'
      }
    }
  }
}
