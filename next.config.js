/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true,  experimental: {
    serverActions: true,
  },
  env: {
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    OAUTH_CLIENT_KEY:  process.env.OAUTH_CLIENT_KEY,
    OAUTH_CLIENT_SECRET:  process.env.OAUTH_CLIENT_SECRET,
    AUTH_SECRET:  process.env.AUTH_SECRET,
    NEXTAUTH_URL:  process.env.NEXTAUTH_URL
  }, }

module.exports = withContentlayer(nextConfig)