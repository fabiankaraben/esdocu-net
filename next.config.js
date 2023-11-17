const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test('.svg')
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/feed.xml',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bootstrap',
        destination: '/bootstrap/5.3/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3',
        destination: '/bootstrap/5.3/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/getting-started',
        destination: '/bootstrap/5.3/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/customize',
        destination: '/bootstrap/5.3/customize/overview',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/layout',
        destination: '/bootstrap/5.3/layout/breakpoints',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/content',
        destination: '/bootstrap/5.3/content/reboot',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/forms',
        destination: '/bootstrap/5.3/forms/overview',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/components',
        destination: '/bootstrap/5.3/components/accordion',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/helpers',
        destination: '/bootstrap/5.3/helpers/clearfix',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/utilities',
        destination: '/bootstrap/5.3/utilities/api',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/extend',
        destination: '/bootstrap/5.3/extend/approach',
        permanent: true,
      },
      {
        source: '/bootstrap/5.3/about',
        destination: '/bootstrap/5.3/about/overview',
        permanent: true,
      },
    ];
  },
})
