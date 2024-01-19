/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            memo: true,
            dimensions: false,
            svgoConfig: {
              multipass: true,
              plugins: [
                'removeDimensions',
                'removeOffCanvasPaths',
                'reusePaths',
                'removeElementsByAttr',
                'removeStyleElement',
                'removeScriptElement',
                'removeUselessStrokeAndFill',
                'prefixIds',
                'cleanupIds',
                'convertPathData',
                {
                  name: 'cleanupNumericValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'convertTransform',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'cleanupListOfValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
