/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only run ESLint during development
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 