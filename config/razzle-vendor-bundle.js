module.exports = (baseConfig, { target, dev }, webpack) => {
  let config = baseConfig

  // Change the name of the server output file in production
  if (target === 'web') {
    // modify filenaming to account for multiple entry files
    config.output.filename = dev ? 'static/js/[name].js' : 'static/js/[name].[hash:8].js'

    // add another entry point called vendor
    config.entry.vendor = [
      // now that React has moved, we need to Razzle's polyfills because
      // vendor.js will be loaded before our other entry. Razzle looks for
      // process.env.REACT_BUNDLE_PATH and will exclude the polyfill from our normal entry,
      // so we don't need to worry about including it twice.
      require.resolve('razzle/polyfills'),
      require.resolve('react'),
      require.resolve('react-dom'),
      // ... add any other vendor packages with require.resolve('xxx')
    ]

    config.optimization = {
      splitChunks: {
        // Chunk splitting optimiztion
        chunks: 'all',
        // Switch off name generation, otherwise files would be invalidated
        // when more chunks with the same vendors are added
        // 若值为 false,在开发模式下不能正常加载样式
        name: 'vendor',
      },
    }
  }
  return config
}
