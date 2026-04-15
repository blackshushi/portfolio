const repo = 'portfolio'

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
