var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/', '/binary-to-hexadecimal', '/hexadecimal-to-decimal', '/wake-on-lan', '/lan-local-area-network', '/octal-to-binary-converter', '/decimal-to-binary', '/octal-to-decimal', '/decimal-to-hexadecimal', '/hexadecimal-to-octal', '/decimal-to-octal', '/hexadecimal-to-binary-converter', '/qr-code-reader', '/qr-code-generator', '/about-creator', '/blog', '/binary-to-decimal', '/binary-to-octal', '/write-for-us', '/ascii-to-binary', '/binary-converter', '/2-in-binary', '/write-6-in-binary', '/how-to-write-10-in-binary', '/22inbinary', '/3-in-binary'],
        )
      ]
    }
  }
}
