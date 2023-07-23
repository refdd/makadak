/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  env: {},
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ['src'],
  },
  // output: 'export'
}

module.exports = nextConfig
