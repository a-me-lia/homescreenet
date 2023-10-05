/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  env: {
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    GITHUB_OAUTH_CLIENT_KEY: process.env.GITHUB_OAUTH_CLIENT_KEY,
    GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    GOOGLE_OAUTH_CLIENT_KEY: process.env.GOOGLE_OAUTH_CLIENT_KEY,
    GOOGLe_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    RESEND_KEY: process.env.RESEND_KEY,
  },
};

module.exports = withContentlayer(nextConfig);
